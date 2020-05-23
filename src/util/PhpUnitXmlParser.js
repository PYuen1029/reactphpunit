class PhpUnitXmlParser {
    async parse(file) {
        let someDomParser = new DOMParser();

        if (!window.DOMParser) {
            return [];
        }

        const inputXmlFileData = await this.readInputXmlFile(file);

        if (inputXmlFileData.length === 0) {
            return {}
        }

        let fileDataXml = someDomParser.parseFromString(inputXmlFileData, 'text/xml');

        return {
            topLevelData: this.getTopLevelData(fileDataXml),
            mainContent: this.getMainContentData(fileDataXml)
        }
    }


    async readInputXmlFile(file) {
        const fileReader = new FileReader();
        let fileInputData;

        try {
            fileInputData = await new Promise((resolve, reject) => {
                fileReader.onerror = () => {
                    fileReader.abort();
                    reject(new DOMException("Problem parsing the input file."));
                }

                fileReader.onload = () => {
                    resolve(fileReader.result);
                }

                fileReader.readAsText(file, 'text/xml');
            });
        } catch (err) {
            // @todo: @pyuen, maybe do something useful here
            return '';
        }

        return fileInputData
    }

    getTopLevelData(fileData) {
        let topLevelElementData = fileData.querySelectorAll('[name="All Tests"]').item(0);

        // @todo: @pyuen, error check for empty element
        topLevelElementData = topLevelElementData.attributes;

        // @todo: @pyuen, maybe do it less hard coded, just an array of the attribute/values you want returned in the JSON
        return {
            tests: topLevelElementData.tests.value,
            assertions: topLevelElementData.assertions.value,
            time: topLevelElementData.time.value,
            failures: topLevelElementData.failures.value,
            errors: topLevelElementData.errors.value,
            skipped: topLevelElementData.skipped.value,
        }

    }

    getMainContentData(fileData) {
        let mainContentData = [];

        let testSuites = fileData.querySelectorAll('testsuite');
        testSuites.forEach(function(node) {
            let nodeAttributes = node.attributes;
            if (nodeAttributes.name.value === 'All Tests'){
                return;
            }

            let tests = node.children;

            let testData = {
                name: nodeAttributes.name.value,
                numberOfTests: nodeAttributes.tests.value,
                assertions: nodeAttributes.assertions.value,
                errors: nodeAttributes.errors.value,
                failures: nodeAttributes.failures.value,
                skipped: nodeAttributes.skipped.value,
                elapsedTime: nodeAttributes.time.value,
                tests: tests
            }

            mainContentData.push(testData);
        })

        return mainContentData;
    }
}

export default PhpUnitXmlParser;
