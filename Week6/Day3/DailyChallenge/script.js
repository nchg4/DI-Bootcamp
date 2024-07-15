class video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    };
    watch(){
    console.log(`${this.uploader} watched ${this.time} of ${this.title}`);
    };
};


const newVideo = new video("YouTube", "Marc", "300 minutes");
newVideo.watch();

const otherVideo = new video("Netflix TV shows", "Alberto", "8 series");
otherVideo.watch();