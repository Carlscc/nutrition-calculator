
const results = () => {
    event.preventDefault()
const find = (id) => { return document.getElementById(id)}


    let weight = find("pounds").value
    //used the median values from ranges in Sean's PDF to calculate protein and carbs (protein remains same, carbs differ if training or off day)
    const protein = weight * 0.875
    const carbsTrain = weight * 1.2
    const carbsOff = weight * 0.8

    //number of calories from carbs and protein, on Training Days and Off Days
    const fatCalsTrain = (carbsTrain * 4) + (protein * 4)
    const fatCalsOff = (carbsOff * 4) + (protein * 4)

    if (find("fatloss").checked){
        calories = weight * 12
        //remaining calories from carbs and protein, divided by 9 to calculate fat in grams
        fatLossTrain = (calories - fatCalsTrain) / 9
        fatLossOff = (calories - fatCalsOff) / 9
        find("td_fat").innerHTML = Math.round(fatLossTrain)
        find("od_fat").innerHTML = Math.round(fatLossOff)
    }
    else if (find("maintenance").checked){
        calories = weight * 15
        fatMainTrain = (calories - fatCalsTrain) / 9
        fatMainOff = (calories - fatCalsOff )/ 9
        find("td_fat").innerHTML = Math.round(fatMainTrain)
        find("od_fat").innerHTML = Math.round(fatMainOff)

    }
    else if (find("maingain").checked) {
        calories = weight * 18.5
        fatGainTrain = (calories - fatCalsTrain) / 9
        fatGainOff = (calories - fatCalsOff) / 9
        find("td_fat").innerHTML = Math.round(fatGainTrain)
        find("od_fat").innerHTML = Math.round(fatGainOff)

    }

    find("cals1").innerHTML = Math.round(calories)
    find("cals2").innerHTML = Math.round(calories)
    find("Protein1").innerHTML = Math.round(protein)
    find("Protein2").innerHTML = Math.round(protein)
    find("td_carbs").innerHTML = Math.round(carbsTrain)
    find("od_carbs").innerHTML = Math.round(carbsOff)
  };
















