export function addToList<T>(list: T[], newItem: T) {
	list.push(newItem);
	return list;
}
