export function diff<T extends object>(oldObj: T, newObj: Partial<T>) {
	const changed: Partial<T> = {}

	Object.keys(newObj).forEach((key) => {
		const k = key as keyof T
		if (newObj[k] !== oldObj[k]) {
			changed[k] = newObj[k]
		}
	})
	return changed
}
