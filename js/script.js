console.log("JS linked")

class Button{
    constructor(textColor,backgroundcolor, width , height, orderNum){
        this.button = document.createElement("button");
        this.button.className = 'onScreen'
        this.button.id = 'moving' + orderNum
        this.button.disabled = true
        this.button.style.position = "absolute"
        this.button.style.color = textColor
        this.button.style.backgroundColor = backgroundcolor
        this.button.style.width = width  + "em"
        this.button.style.height = height + "em"
        this.button.orderNum = orderNum
        this.button.textContent =  this.button.orderNum
        document.body.appendChild(this.button)
    }

    setLocation(x,y){
        this.button.style.left = x + "vw"
        this.button.style.top = y  + "vh"
    }

    removeClick(){
        this.button.disabled = true
    }

    makeClickable(){
        this.button.disabled = false
    }

    removeMovingId(){
        this.button.id = "still"  + this.button.orderNum
    }

    makeBlankText(){
        this.removeMovingId()
        this.button.textContent = emptyString
        console.log("Blank: " +  this.button.textContent)
        this.makeClickable()
    }

    makeTextVisible(){
        console.log("making visble ..." + "" + this.button.orderNum)

        console.log("Befire: " +  this.button.textContent)
        this.button.textContent = emptyString + this.button.orderNum
        console.log("After: " +  this.button.textContent)
        this.removeClick();
    }

}


function verifyInput(input) {
    if(input >= 3 && input <= 7){
        return input;
    }else{  
        return emptyString;
    }
}


class Game{

    constructor(){
        this.errorMessage = document.createElement('p')
        this.gameResultMessage = document.createElement('h1')
        this.buttonList = []  
        this.moveCounter = 0;
        this.orderCounter = 1;
        this.colourList = [
            "Red", "SkyBlue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Cyan", "Magenta",
            "Lime", "Teal", "Indigo", "Maroon", "Navy", "Olive", "Silver", "Aqua", "Aquamarine", "Azure", "SteelBlue", "Bisque", "BlanchedAlmond", "BurlyWood", "CadetBlue",
            "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
            "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
            "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
            "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "GreenYellow", "HoneyDew", "HotPink", "IndianRed",
            "RebeccaPurple", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
            "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "LimeGreen",
            "Linen", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
            "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "OldLace", "OliveDrab", "OrangeRed", "Orchid", "PaleGoldenRod",
            "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "PowderBlue", "RosyBrown", "RoyalBlue", "SaddleBrown"
          ];
    }


    createButtons(numofButtons){
        
        for(let i = 1; i < numofButtons+1; i++){
            let index = Math.floor(Math.random()*101)
            let button = new Button(btnTextColor,this.colourList[index],10,5, i)
            if(i > 4){
                button.setLocation(20 * (i-4),40)
            }else{
                button.setLocation(20 * i,20)
            }
           
            this.buttonList.push(button)
        }
        
    }

    convertInputtoInteger(input){
        return parseInt(input)
    }

 
    incrementCounter(counter){
       return counter + 1;
    }

    convertEmtovw(width){
        let pixelsize = 10 * 16
        let vw = pixelsize/width*100
        return vw;
    }

    convertEmtovh(height){
        let pixelsize = 5 * 16
        let vw = pixelsize/height*100
        return vw;
    }

    changeBtnLocation(){
        
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        windowWidth = windowWidth
        windowHeight = windowHeight
        let offsetWidth = this.convertEmtovw(windowWidth)
        let offsetHegiht = this.convertEmtovw(windowHeight)
        console.log("winWid: " + windowWidth)
        console.log("winHg: " + windowHeight)
        for(let i = 0; i < this.buttonList.length;i++){
            // console.log("Button: " + i)
            let x = Math.floor(Math.random() * 1700 + Math.random() * 130) 
            let y = Math.floor(Math.random() * 1700 + Math.random() * 130)
            // console.log("firstX: " + x)
            // console.log("firstY: " + y)
            while(x > (100-offsetWidth) || y > (100-offsetHegiht)){
                console.log("x: " + x + " y: " + y + "out of window of w:" + windowWidth +" by " + windowHeight)
                // console.log("X: " + x)
                // console.log("Y: " + y)
                x = Math.floor(Math.random() * 30 + Math.random() * 60) 
                y = Math.floor(Math.random() * 10 + Math.random() * 70)
            }
            console.log("Newx: " + x + "New y: " + y)
            this.buttonList[i].setLocation(x ,y)
            console.log("--------------------------------------")
        }
        
    }

    BtnTextDissapear(){
        for(let i = 0; i < this.buttonList.length;i++){
            this.buttonList[i].makeBlankText()
        }
    }


    async intervalPauses(numofTimes){
        console.log("IP2: " + numofTimes)


        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
        for (let i = 0; i < numofTimes; i++) {
    
            this.changeBtnLocation();


            if (i < numofTimes - 1) {
                await delay(2000); // Pause between moves except last
            }else{
                await delay(500);
            }
        }
    
        console.log("Stopping");
        this.BtnTextDissapear()
    }


    async firstNPause(numofSeconds){
        //gpt
        await new Promise( (resolve) => setTimeout(() =>{
            console.log("pausing for " + numofSeconds)
            resolve();
            
        }, numofSeconds * 1000));
    }

    verifyclickOrder(id){
        console.log("orderCounter: " + this.orderCounter)
        return this.orderCounter == id
    }

    flip(id, gameoverStatus){
            console.log("Flipping")
            console.log("id: "+id)
            if (this.verifyclickOrder(id)){
                this.buttonList[id-1].makeTextVisible()
                this.orderCounter = this.incrementCounter(this.orderCounter)
                if(id == this.buttonList.length && !gameoverStatus){
                    this.gameResultMessage.textContent = winMessage
                    document.body.appendChild(this.gameResultMessage)
                }
            }else{
                this.gameOver()
            }
            
            
          
    }

    flipCorrectOrder(){
        this.orderCounter = 1;
        for(let i = 1; i < this.buttonList.length+1; i++){
            this.flip(i, true)
        }
    }

    gameOver(){
        this.gameResultMessage.textContent = loseMessage
        document.body.appendChild(this.gameResultMessage)
        this.BtnTextDissapear()
        setTimeout(() => {
            console.log("game over flipping correctly")
            this.flipCorrectOrder()
        } , 250)
        
        
        
    }

    clearPreviousButtons(className) {
        // Select all elements with the specified class
        let buttons = document.querySelectorAll('.' + className);
    
        // Remove each button
        buttons.forEach((button) => {
            button.remove();
        });
        this.buttonList = []
    }

    intializeErrorMessage(){
        this.errorMessage.id = "error"
        this.errorMessage.textContent = emptyString
        document.body.appendChild(this.errorMessage)
    }

    intializeGameResultMessage(){
        this.gameResultMessage.id = "result"
        this.gameResultMessage.textContent = emptyString
    }

    playGame(){
        console.log("user can now play")
        for(let i = 1; i < this.buttonList.length+1; i ++){
            document.getElementById("still" + i).onclick = () => this.flip(i,false)
        }
    }

    async startGame(){
        console.log("len: " + this.colourList.length)
        this.moveCounter = 0;
        this.orderCounter = 1
        this.clearPreviousButtons("onScreen")
        this.intializeErrorMessage()
        this.intializeGameResultMessage()
        let input = verifyInput(document.getElementById("input").value)
        if(input){
            input = this.convertInputtoInteger(input)
            document.getElementById("error").textContent = emptyString
            this.createButtons(input)
            console.log(this.buttonList)
            await this.firstNPause(input)
            await this.intervalPauses(input)
            console.log("Done Setting up")
            this.playGame()
            

        }else{
            document.getElementById("error").textContent = inputErrorMessage
        }
        
    }
}



document.getElementById('label').innerText = formLabel
document.getElementById('start').innerText = startButtonLabel
let game = new Game()
document.getElementById("start").onclick = () => game.startGame();

