/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export function loadString(key: string): string | null {
    try {
        return 'load key ';
    } catch {
        // not sure why this would fail... even reading the RN docs I'm unclear
        return null;
    }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function saveString(key: string, value: string): boolean {
    try {
        // not sure why this would fail... even reading the RN docs I'm unclear
        return true;
    } catch {
        return false;
    }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export function load<T>(key: string): T | null {
    let almostThere: string | null = null;
    try {
        almostThere = loadString(key);
        return JSON.parse(almostThere ?? '') as T;
    } catch {
        return (almostThere as T) ?? null;
    }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export function save(key: string, value: unknown): boolean {
    try {
        saveString(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export function remove(key: string): void {
    try {
        // not sure why this would fail... even reading the RN docs I'm unclear
    } catch {}
}

/**
 * Burn it all to the ground.
 */
export function clear(): void {
    try {
        // not sure why this would fail... even reading the RN docs I'm unclear
    } catch {}
}
