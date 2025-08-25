type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: {}[], key: string): GroupsMap<{}[]> {
  return items.reduce((groups: GroupsMap<{}[]>, item: {}) => {
    const groupKey = item[key];

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);

    return groups;
  }, {});
}
