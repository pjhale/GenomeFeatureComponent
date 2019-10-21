export class ApolloService
{
    /*
    * ApolloService Class
    *
    */
    constructor(){ }

    GetIsoformTrack(url){
        return new Promise((resolve, reject) =>{
            fetch(url).then((response) => {
                resolve(response.json())
            }).catch(error => {
                reject(error);
            })
        });
    }

    GetLocalSequence(build, chromosome, start, end){
        let url = "http://demo.genomearchitect.org/Apollo2/sequence/Human-Hg38/chr" + chromosome + ":" + start + ".." + end
        return new Promise((resolve, reject)=>{
            fetch(url).then((response) =>{
                resolve(response.text());
            }).catch(error =>{
                reject(error);
            })
        });
    }

}

