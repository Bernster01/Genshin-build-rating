function GenerateArtifacts(scaling){
    let artifacts=[
        GenerateRandomArtifact("Circlet",scaling),
        GenerateRandomArtifact("Flower",scaling),
        GenerateRandomArtifact("Plume",scaling),
        GenerateRandomArtifact("Sands",scaling),
        GenerateRandomArtifact("Goblet",scaling)
    ];
    return artifacts;
}
function GenerateRandomArtifact(piece,scaling){

    let mainStat;
    switch(piece){
        case "Circlet":
            switch(scaling){
                case "Hybrid":
                    mainStat = {Type:mainStatCircletOptions[GetRandomNumber(0,6)], Value:null};
                    break;
                case "ATK":
                    mainStat = {Type:mainStatCircletOptions[GetRandomNumber(0,6)], Value:null};
                    do{
                    mainStat = {Type:mainStatCircletOptions[GetRandomNumber(0,6)], Value:null};
                    }while(mainStat.Type == "DEF%" || mainStat.Type =="HP%")
                    break;
                case "DEF":
                    mainStat = {Type:mainStatCircletOptions[GetRandomNumber(0,6)], Value:null};
                    break;
                case "HP":
                    mainStat = {Type:mainStatCircletOptions[GetRandomNumber(0,6)], Value:null};
                    break;
            }
            
            break;
        case "Flower":
            mainStat = {Type:mainStatFlowerOptions[0], Value:null};
            break;
        case "Plume":
            mainStat = {Type:mainStatPlumeOptions[0], Value:null};
            break;
        case "Sands":
            switch(scaling){
                case "Hybrid":
                    mainStat = {Type:mainStatSandsOptions[GetRandomNumber(0,4)], Value:null};
                    break;
                case "ATK":
                    mainStat = {Type:mainStatSandsOptions[GetRandomNumber(0,4)], Value:null};
                    do{
                        mainStat = {Type:mainStatSandsOptions[GetRandomNumber(0,4)], Value:null};
                    }while(mainStat.Type == "DEF%" || mainStat.Type =="HP%")                    
                    break;
                case "DEF":
                    mainStat = {Type:mainStatSandsOptions[GetRandomNumber(0,4)], Value:null};
                    break;
                case "HP":
                    mainStat = {Type:mainStatSandsOptions[GetRandomNumber(0,4)], Value:null};
                    break;
            }
            break;
        case "Goblet":
            switch(scaling){
                case "Hybrid":
                    mainStat = {Type:mainStatGobletOptions[GetRandomNumber(0,10)], Value:null};
                    break;
                case "ATK":
                    mainStat = {Type:mainStatGobletOptions[GetRandomNumber(0,10)], Value:null};
                    do{
                        mainStat = {Type:mainStatGobletOptions[GetRandomNumber(0,10)], Value:null};
                        }while(mainStat.Type == "DEF%" || mainStat.Type =="HP%")
                    break;
                case "DEF":
                    mainStat = {Type:mainStatGobletOptions[GetRandomNumber(0,10)], Value:null};
                    break;
                case "HP":
                    mainStat = {Type:mainStatGobletOptions[GetRandomNumber(0,10)], Value:null};
                    break;
            }
            break;

    }
    let subStat1 = {Type:null, Value:null};
    let subStat2 = {Type:null, Value:null};
    let subStat3 = {Type:null, Value:null};
    let subStat4 = {Type:null, Value:null};
    switch(scaling){
        case "Hybrid":
            do{
                subStat1.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat1.Type == mainStat.Type)
            do{
                subStat2.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat2.Type == mainStat.Type || subStat2.Type == subStat1.Type)
            do{
                subStat3.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat3.Type == mainStat.Type || subStat3.Type == subStat1.Type || subStat3.Type == subStat2.Type)
            do{
                subStat4.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat4.Type == mainStat.Type || subStat4.Type == subStat1.Type || subStat4.Type == subStat2.Type || subStat4.Type == subStat3.Type)
            break;
        case "ATK":
            do{
                subStat1.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat1.Type == mainStat.Type || subStat1.Type == "DEF%" || subStat1.Type == "HP%" || subStat1.Type == "HPflat" || subStat1.Type == "DEFflat")
            do{
                subStat2.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat2.Type == mainStat.Type || subStat2.Type == subStat1.Type  || subStat2.Type == "DEF%" || subStat2.Type == "HP%" || subStat2.Type == "HPflat" || subStat2.Type == "DEFflat")
            do{
                subStat3.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat3.Type == mainStat.Type || subStat3.Type == subStat1.Type || subStat3.Type == subStat2.Type  || subStat3.Type == "DEF%" || subStat3.Type == "HP%" || subStat3.Type == "HPflat" || subStat3.Type == "DEFflat")
            do{
                subStat4.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat4.Type == mainStat.Type || subStat4.Type == subStat1.Type || subStat4.Type == subStat2.Type || subStat4.Type == subStat3.Type  || subStat4.Type == "DEF%" || subStat4.Type == "HP%" || subStat4.Type == "HPflat" || subStat4.Type == "DEFflat")
            break;
        case "DEF":
                do{
                    subStat1.Type = subStatOptions[GetRandomNumber(0,9)];
                }
                while(subStat1.Type == mainStat.Type || subStat1.Type == "ATK%" || subStat1.Type == "HP%" || subStat1.Type == "HPflat" || subStat1.Type == "ATKflat")
                do{
                    subStat2.Type = subStatOptions[GetRandomNumber(0,9)];
                }
                while(subStat2.Type == mainStat.Type || subStat2.Type == subStat1.Type  || subStat2.Type == "ATK%" || subStat2.Type == "HP%" || subStat2.Type == "HPflat" || subStat2.Type == "ATKflat")
                do{
                    subStat3.Type = subStatOptions[GetRandomNumber(0,9)];
                }
                while(subStat3.Type == mainStat.Type || subStat3.Type == subStat1.Type || subStat3.Type == subStat2.Type  || subStat3.Type == "ATK%" || subStat3.Type == "HP%" || subStat3.Type == "HPflat" || subStat3.Type == "ATKflat")
                do{
                    subStat4.Type = subStatOptions[GetRandomNumber(0,9)];
                }
                while(subStat4.Type == mainStat.Type || subStat4.Type == subStat1.Type || subStat4.Type == subStat2.Type || subStat4.Type == subStat3.Type  || subStat4.Type == "ATK%" || subStat4.Type == "HP%" || subStat4.Type == "HPflat" || subStat4.Type == "ATKflat")
                break;
        case "HP":
            do{
                subStat1.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat1.Type == mainStat.Type || subStat1.Type == "DEF%" || subStat1.Type == "ATK%" || subStat1.Type == "ATKflat" || subStat1.Type == "DEFflat")
            do{
                subStat2.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat2.Type == mainStat.Type || subStat2.Type == subStat1.Type  || subStat2.Type == "DEF%" || subStat2.Type == "ATK%" || subStat2.Type == "ATKflat" || subStat2.Type == "DEFflat")
            do{
                subStat3.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat3.Type == mainStat.Type || subStat3.Type == subStat1.Type || subStat3.Type == subStat2.Type  || subStat3.Type == "DEF%" || subStat3.Type == "ATK%" || subStat3.Type == "ATKflat" || subStat3.Type == "DEFflat")
            do{
                subStat4.Type = subStatOptions[GetRandomNumber(0,9)];
            }
            while(subStat4.Type == mainStat.Type || subStat4.Type == subStat1.Type || subStat4.Type == subStat2.Type || subStat4.Type == subStat3.Type  || subStat4.Type == "DEF%" || subStat4.Type == "ATK%" || subStat4.Type == "ATKflat" || subStat4.Type == "DEFflat")
            break;
    }
    
      
       

    mainStat.Value = mainStatValues[mainStat.Type];
    subStat1.Value=subStatValues[subStat1.Type];
    subStat2.Value=subStatValues[subStat2.Type];
    subStat3.Value=subStatValues[subStat3.Type];
    subStat4.Value=subStatValues[subStat4.Type];
    for (let index = 0; index < 5; index++) {
        switch(GetRandomNumber(1,4)){
            case 1:
                subStat1.Value+=subStatValues[subStat1.Type];
                break;
            case 2:
                subStat2.Value+=subStatValues[subStat2.Type];
                break;
            case 3:
                subStat3.Value+=subStatValues[subStat3.Type];
                break;
            case 4:
                subStat4.Value+=subStatValues[subStat4.Type];
                break;
        }   
    }
    let set = sets[GetRandomNumber(0,17)];
    let artifact= new Artifact(piece,mainStat,subStat1,subStat2,subStat3,subStat4,set);
    return artifact;
}