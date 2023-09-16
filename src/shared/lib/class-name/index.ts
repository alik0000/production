type Mod = Record<string, boolean | string>
export const cn = (cls: string, mod: Mod = {}, additional: string[] = []):string => {
    let str = cls
    for (const [key, val] of Object.entries(mod)) {
        if(val) str += ` ${key}`;
    }

    return `${str} ${additional.join(' ')}`
}
