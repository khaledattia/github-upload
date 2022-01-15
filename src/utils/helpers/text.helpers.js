





// if the text exceded the max Length
// the rest fo the conent will be 
// three dots ( what ar... )
export const maxTextLength = (text, len) => {
	let { length } = text;

	if( length <= len ){

		return text;
	};

	return `${text.slice(0, len)}...`;	
}

// replace signs with tags for instance
// ###          --> <h3></h3>
// -            --> (list items)
// {{ string }} --> bold/strong
export const enableTextFormat = ( value ) => {

    const text = `${value}`;
    let textWithLineBreaks = text
    .replace(/(((<\w+(.*)>)(.*)(<\/\w+(.*)>))|(<\w+(.*)>)|(<\/\w+(.*)>))/gm, "")
    .replace(/^-\s?([^-\n]+)\n?/gm, "<li style = 'margin-left: 1.75rem'>$1</li>")
    .replace(/^#{3}\s([^#\n]+)\n?/gm, "<h4 style = 'color: #000; margin: 0; margin-bottom: 0.125rem'>$1</h4>")
    .replace(/{([^}]+)}/gm, '<strong>$1</strong>');

    return textWithLineBreaks;

}

// just replace all enableTextFormat to null
export const disableTextFormat = ( value ) => {

    const text = `${value}`;
    let textWithLineBreaks = text
    .replace(/(((<\w+(.*)>)(.*)(<\/\w+(.*)>))|(<\w+(.*)>)|(<\/\w+(.*)>))\n?/gm, "")
    .replace(/^#{3}\s([^#\n]+)\n?/gm, '<span>$1</span>')
    .replace(/{([^}]+)}/gm, '<span>$1</span>')

    return textWithLineBreaks;
}


