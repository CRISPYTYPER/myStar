const GoogleImages = require('google-images');
const client = new GoogleImages('5ec9f3f331e398bb4', 'AIzaSyCq4eFk-CxzHa6qYC7Gb22QvmxvoSn9PHE');

window.setImmediate = window.setTimeout;
// 이미지 검색
export const searchFunc = (keyWord) =>{
    client.search("star " + keyWord).then(images => {
        // images.forEach(img => {
        //       console.log(img);
        //     }
        // );
        console.log(images[0]);
        return [images[0].url, images[0].thumbnail.url];
    });
}
 

