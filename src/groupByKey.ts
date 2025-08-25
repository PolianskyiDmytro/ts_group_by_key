type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T, key: string): GroupsMap<Partial<T>> {
  return items.reduce((groups: GroupsMap<Partial<T>>, item: object) => {
    const groupKey = item[key];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);

    return groups;
  }, {});
}
