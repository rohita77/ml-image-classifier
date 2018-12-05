import * as ml5 from '../../node_modules/ml5/dist/ml5.min.js';

export class Classifier {

    modelName = 'mobilenet';
    model = null;
    customModel = {
        model: null,
        lossValue: -1,
        isTraining: false,
        modelLoaded: false
    };
    modelLoaded = false;

    constructor(modelName) {
        this.modelName = modelName;
        return this;
    }

    async loadModel() {
        this.model = await ml5.imageClassifier('MobileNet');
        console.log('model loaded....');
        this.modelLoaded = true;
        await this.loadTrainableModel();
    }

    async loadTrainableModel() {
        // Initialize the Image Classifier method with MobileNet
        this.customModel.modelLoaded = false;
        const features = await ml5.featureExtractor('MobileNet');
        console.log('feature extractor loaded ....');

        this.customModel.model = await features.classification();
        console.log('custom classifier loaded....');
        this.customModel.modelLoaded = true;
    }

    async addImageForTraining(image, className) {

        this.customModel.model.addImage(image, className);
    }

    async trainCustomeModel() {
        this.customModel.isTraining = true;
        await this.customModel.model.train((lossValue) => {
            if (lossValue) {
                this.customModel.lossValue = lossValue;
            }
        });
        await this.customModel.model.save();
        this.customModel.isTraining = false;

    }

    async classifyImage(image) {
        // Convert the blob to a dataUrl that can be assigned to an <img> element.'
        let results = [];
        if (this.customModel.model.hasAnyTrainedClass
            && !this.customModel.isTraining) {
            results.push(
                { className : await this.customModel.model.classify(image) });
        } else {
            results = await this.model.predict(image);
        }


        console.log(results);
        return results;
    }
}
