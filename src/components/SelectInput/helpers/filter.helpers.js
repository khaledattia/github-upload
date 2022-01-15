

export function filter( keywords, options ) {
    const filteredOptions = options.filter(item => {

        let itemLowerCased  = item.toLowerCase();
        let valueLowerCased = keywords.toLowerCase();
        let bool = itemLowerCased.indexOf( valueLowerCased ) >= 0;

        return bool;

    })

    return filteredOptions;
}