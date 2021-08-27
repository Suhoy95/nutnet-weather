
/**
 * Интерфейс для работы с localStorage/sessionStorage,
 * Используется для сохранение истории поиска, а также для хранения кэша городов.
 */

const HISTORY_LIMIT = 9;

class HistoryStorage {
  constructor() {
    const history = JSON.parse(localStorage.getItem('citiesHistory')) || [];

    this.history = history.filter((city) => (
      typeof city === 'object' && city !== null &&
      "name" in city &&
      "temp" in city &&
      "accessDate" in city
    ));
  }

  pushCityToHistory(city) {
    const { name } = city;

    // Удаляем город из истории, чтобы не было дубликатов
    const idx = this.history.findIndex((c) => c.name == name);
    if (idx >= 0) {
      this.history.splice(idx, 1);
    }

    this.history.unshift(city);

    // Лимитируем кол-во городов в истории
    this.history.splice(HISTORY_LIMIT);

    localStorage.setItem('citiesHistory', JSON.stringify(this.history));
  }

  get citiesHistory() {
    return this.history;
  }

}

export default new HistoryStorage();
