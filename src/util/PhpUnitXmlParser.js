class PhpUnitXmlParser {
    parse(file) {
        const fileReader = new FileReader();

        fileReader.onloadend = (e) => {
            let domParser = new DOMParser();
            let doc = domParser.parseFromString(fileReader.result, 'text/xml')

            console.group("DEBUG: Line 9");
            console.dir(doc);
            console.groupEnd();
        };

        if (file == null) {
            return {};
        }

        fileReader.readAsText(file)

        return {foo: 'bar'}
    }
}

export default PhpUnitXmlParser;
