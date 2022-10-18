let compiledresult = ""

var app = null

class GameWin extends HTMLElement
{
    get hassize()
    {
        return this.hasAttribute('width') && this.hasAttribute('height')
    }

    get hascolor()
    {
        return this.hasAttribute('backgroundcolor')
    }
    constructor()
    {
        super()        
    }

    connectedCallback()
    {
        if (this.hassize)
        {
            if (this.hascolor)
            {
                let elresult = `window.app = new PIXI.Application({width: ${this.attributes.width.value}, height: ${this.attributes.height.value}, backgroundColor: ${this.attributes.backgroundcolor.value}, autoResize: true});document.body.appendChild(app.view); function resize() {

                    app.view.style.width = window.innerWidth + 'px';
                    app.view.style.height = window.innerHeight + 'px';
                
                }
                
                window.onresize = resize;`
                compiledresult = compiledresult.concat(elresult)
            }
            else 
            {
                let elresult = `window.app = new PIXI.Application({width: ${this.attributes.width.value}, height: ${this.attributes.height.value}, autoResize: true});document.body.appendChild(app.view); function resize() {

                    app.view.style.width = window.innerWidth + 'px';
                    app.view.style.height = window.innerHeight + 'px';
                
                }
                
                window.onresize = resize;`
                compiledresult = compiledresult.concat(elresult)
            }
        }
        else
        {
            if (this.hascolor)
            {
                let elresult = `window.app = new PIXI.Application({width: 460, height: 380, backgroundColor: ${this.attributes.bgcolor.value}, autoResize: true});document.body.appendChild(app.view); function resize() {

                    app.view.style.width = window.innerWidth + 'px';
                    app.view.style.height = window.innerHeight + 'px';
                
                }
                
                window.onresize = resize;`
                compiledresult = compiledresult.concat(elresult)
            }
            else 
            {
                let elresult = `window.app = new PIXI.Application({width: 460, height: 380, autoResize: true});document.body.appendChild(app.view); function resize() {

                    app.view.style.width = window.innerWidth + 'px';
                    app.view.style.height = window.innerHeight + 'px';
                
                }
                
                window.onresize = resize;`
                compiledresult = compiledresult.concat(elresult)
            }
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('game-win', GameWin)

class GameObject extends HTMLElement
{
    get hasname()
    {
        return this.hasAttribute("name")
    }

    get hassprite()
    {
        return this.hasAttribute("sprite")
    }
    get haspos()
    {
        return this.hasAttribute("x") && this.hasAttribute('y')
    }
    get hassize()
    {
        return this.hasAttribute("width") && this.hasAttribute('height')
    }
    constructor(){
        super()        
    }

    connectedCallback()
    {
        if (this.hasname)
        {
            if (this.hassprite)
            {
                if (this.haspos)
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value}; ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                else 
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value});`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
            }
            else
            {
                throw console.log(`How could you see the object without a sprite. Object: ${this.attributes.name.value}`)
            }
        }
        else
        {
            throw console.error("Cruel programmers don't give names to object!")
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('game-object', GameObject)

class GameButton extends HTMLElement
{
    get hasname()
    {
        return this.hasAttribute("name")
    }

    get hassprite()
    {
        return this.hasAttribute("sprite")
    }
    get haspos()
    {
        return this.hasAttribute("x") && this.hasAttribute('y')
    }
    get hassize()
    {
        return this.hasAttribute("width") && this.hasAttribute('height')
    }
    constructor(){
        super()        
    }

    connectedCallback()
    {
        if (this.hasname)
        {
            if (this.hassprite)
            {
                if (this.haspos)
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value}; ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                else 
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                let buttononclick = interpretehgelang(this.innerHTML, false)
                this.innerHTML = ""
                let buttonresult = `${this.attributes.name.value}.interactive = true;${this.attributes.name.value}.on('mousedown', function(e){${buttononclick}});app.stage.addChild(${this.attributes.name.value});`
                compiledresult = compiledresult.concat(buttonresult)
            }
            else
            {
                throw console.log(`How could you see the object without a sprite. Object: ${this.attributes.name.value}`)
            }
        }
        else
        {
            throw console.error("Cruel programmers don't give names to object!")
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('game-button', GameButton)

class SceneStart extends HTMLElement
{
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        let lscode = interpretehgelang(this.innerHTML, false)
        compiledresult = compiledresult.concat(lscode)
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('scene-start', SceneStart)

class SceneGroup extends HTMLElement
{
    get hasname()
    {
        return this.hasAttribute('name')
    }
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        if (!this.hasname)
        {
            throw console.error("A group should have a name atleast")
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('scene-group', SceneGroup)

class SceneUpdate extends HTMLElement
{
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        let lscode = interpretehgelang(this.innerHTML, true)
        compiledresult = compiledresult.concat(lscode)
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('scene-update', SceneUpdate)

class GameText extends HTMLElement{
    get hastext()
    {
        return this.hasAttribute("text")
    }

    get hastextstyle()
    {
        return this.hasAttribute("textstyle")
    }

    get hasname()
    {
        return this.hasAttribute("name")
    }

    get haspos(){
        return this.hasAttribute("x") && this.hasAttribute("y")        
    }
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        if (this.hasname){
            if (this.hastext)
            {
                if (this.hastextstyle)
                {
                    compiledresult = compiledresult.concat(this.attributes.textstyle.value)
                    let textcode = `window.${this.attributes.name.value} = new PIXI.Text('${this.attributes.text.value}', ${this.attributes.name.value}style); app.stage.addChild(${this.attributes.name.value});`
                    compiledresult = compiledresult.concat(textcode)
                }
                else 
                {
                    let textcode = `window.${this.attributes.name.value} = new PIXI.Text('${this.attributes.text.value}'); app.stage.addChild(${this.attributes.name.value});`
                    compiledresult = compiledresult.concat(textcode)
                }
                if (this.haspos)
                {
                    let textposcode = `${this.attributes.name.value}.x = ${this.attributes.x.value};${this.attributes.name.value}.y = ${this.attributes.y.value};`
                    compiledresult = compiledresult.concat(textposcode)
                }
            }
            else 
            {
                throw console.error(`No Text in text object, Sad! Text Object: ${this.attributes.name.value}`)
            }
        }
        else{
            throw console.error("Cruel programmers don't give names to text object!")
        }
    }
}

window.customElements.define('game-text', GameText)

class GamePlayer extends HTMLElement
{
    get hasname()
    {
        return this.hasAttribute("name")
    }

    get hassprite()
    {
        return this.hasAttribute("sprite")
    }
    get haspos()
    {
        return this.hasAttribute("x") && this.hasAttribute('y')
    }
    get hassize()
    {
        return this.hasAttribute("width") && this.hasAttribute('height')
    }
    get hasspeed()
    {
        return this.hasAttribute('speed')
    }
    constructor(){
        super()        
    }

    connectedCallback()
    {
        if (this.hasname)
        {
            if (this.hassprite)
            {
                if (this.haspos)
                {
                    if (this.hassize)
                    {
                        let elresult = `window.${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value}; ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `window.${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                else 
                {
                    if (this.hassize)
                    {
                        let elresult = `window.${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `window.${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value});`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                if (this.hasspeed)
                {
                    let movecode = `let keys = {}; window.addEventListener("keydown", (e) => {keys[e.keyCode] = true}); window.addEventListener("keyup", (e) => {keys[e.keyCode] = false}); app.ticker.add(() => {if (keys["87"]){${this.attributes.name.value}.y -= ${this.attributes.speed.value}}; if (keys["83"]){${this.attributes.name.value}.y += ${this.attributes.speed.value}}; if (keys["65"]){${this.attributes.name.value}.x -= ${this.attributes.speed.value}}; if (keys["68"]){${this.attributes.name.value}.x += ${this.attributes.speed.value}};});`                    
                    compiledresult = compiledresult.concat(movecode)
                }
                else 
                {
                    let movecode = `let keys = {}; window.addEventListener("keydown", (e) => {keys[e.keyCode] = true}); window.addEventListener("keyup", (e) => {keys[e.keyCode] = false}); app.ticker.add(() => {if (keys["87"]){${this.attributes.name.value}.y -= 1}; if (keys["83"]){${this.attributes.name.value}.y += 1}; if (keys["65"]){${this.attributes.name.value}.x -= 1}; if (keys["68"]){${this.attributes.name.value}.x += 1};});`
                    compiledresult = compiledresult.concat(movecode)
                }
            }
            else
            {
                throw console.log(`How could you see the object without a sprite. Object: ${this.attributes.name.value}`)
            }
        }
        else
        {
            throw console.error("Cruel programmers don't give names to object!")
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('game-player', GamePlayer)

class GameEnemy extends HTMLElement
{
    get hasname()
    {
        return this.hasAttribute("name")
    }

    get hassprite()
    {
        return this.hasAttribute("sprite")
    }
    get haspos()
    {
        return this.hasAttribute("x") && this.hasAttribute('y')
    }
    get hassize()
    {
        return this.hasAttribute("width") && this.hasAttribute('height')
    }
    get hasspeed()
    {
        return this.hasAttribute('speed')
    }

    get hasplayer()
    {
        return this.hasAttribute('player')
    }
    constructor(){
        super()        
    }

    connectedCallback()
    {
        if (this.hasname)
        {
            if (this.hassprite)
            {
                if (this.haspos)
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value}; ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.x = ${this.attributes.x.value}; ${this.attributes.name.value}.y = ${this.attributes.y.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                else 
                {
                    if (this.hassize)
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value}); ${this.attributes.name.value}.width = ${this.attributes.width.value};  ${this.attributes.name.value}.height = ${this.attributes.height.value};`
                        compiledresult = compiledresult.concat(elresult)
                    }
                    else 
                    {
                        let elresult = `let ${this.attributes.name.value} = PIXI.Sprite.from("${this.attributes.sprite.value}");app.stage.addChild(${this.attributes.name.value});`
                        compiledresult = compiledresult.concat(elresult)
                    }
                }
                if (this.hasplayer)
                {
                    if (this.hasspeed)
                    {
                        let collisioncode = `function aabbcol(a, b){let abox = a.getBounds(); let bbox = b.getBounds(); return abox.x + abox.width > bbox.x && abox.x < bbox.width + bbox.x && abox.y + abox.height > bbox.y && abox.y < bbox.y + bbox.height;};`
                        compiledresult = compiledresult.concat(collisioncode)
                        this.innerHTML = this.innerHTML.replace("self", this.attributes.name.value)
                        let colcode = interpretehgelang(this.innerHTML, false)
                        let movecode = `function angleBetweenPoints(a, b){var posx = b.x - a.x; posy = b.y - a.y; var total = Math.sqrt(posx * posx + posy * posy); var totx = posx / total; var toty = posy / total; var rx = totx * ${this.attributes.speed.value}; var ry = toty * ${this.attributes.speed.value}; return [rx, ry]}; app.ticker.add(() => { let angletogo = angleBetweenPoints({x: ${this.attributes.name.value}.x, y: ${this.attributes.name.value}.y}, {x: ${this.attributes.player.value}.x, y: ${this.attributes.player.value}.y}); ${this.attributes.name.value}.x += angletogo[0]; ${this.attributes.name.value}.y += angletogo[1]; if (aabbcol(${this.attributes.player.value}, ${this.attributes.name.value})){${colcode}};});`
                        compiledresult = compiledresult.concat(movecode)
                    }
                    else 
                    {
                        let collisioncode = `function aabbcol(a, b){let abox = a.getBounds(); let bbox = b.getBounds(); return abox.x + abox.width > bbox.x && abox.x < bbox.width + bbox.x && abox.y + abox.height > bbox.y && abox.y < bbox.y + bbox.height;};`
                        compiledresult = compiledresult.concat(collisioncode)
                        this.innerHTML = this.innerHTML.replace("self", this.attributes.name.value)
                        let colcode = interpretehgelang(this.innerHTML, false)
                        let movecode = `function angleBetweenPoints(a, b){var posx = b.x - a.x; posy = b.y - a.y; var total = Math.sqrt(posx * posx + posy * posy); var totx = posx / total; var toty = posy / total; var rx = totx * 1; var ry = toty * 1; return [rx, ry]}; app.ticker.add(() => { let angletogo = angleBetweenPoints({x: ${this.attributes.name.value}.x, y: ${this.attributes.name.value}.y}, {x: ${this.attributes.player.value}.x, y: ${this.attributes.player.value}.y}); ${this.attributes.name.value}.x += angletogo[0]; ${this.attributes.name.value}.y += angletogo[1]; if (aabbcol(${this.attributes.player.value}, ${this.attributes.name.value})){${colcode}};});`
                        compiledresult = compiledresult.concat(movecode)
                    }
                }
                else 
                {
                    throw console.error(`Enemy without a target player. That doesn't work. Enemy Object: ${this.attributes.name.value}`)
                }
            }
            else
            {
                throw console.error(`How could you see the object without a sprite. Object: ${this.attributes.name.value}`)
            }
        }
        else
        {
            throw console.error("Cruel programmers don't give names to object!")
        }
        this.style.position = 'absolute'
        this.style.color = 'transparent'
    }
}

window.customElements.define('game-enemy', GameEnemy)

class GameAudio extends HTMLElement 
{
    get hasname()
    {
        return this.hasAttribute('name')
    }

    get hasaudio()
    {
        return this.hasAttribute('audio')
    }
    constructor()
    {
        super()
    }

    connectedCallback()
    {
        if (this.hasname)
        {
            if (this.hasaudio)
            {
                let audioobj = `let ${this.attributes.name.value} = new Audio('${this.attributes.audio.value}');`
                compiledresult = compiledresult.concat(audioobj)
            }
            else 
            {
                throw console.error(`Audio object without an audio! Object: ${this.attributes.name.value}`)
            }
        }
        else 
        {
            throw console.error("Cruel programmers don't give names to object!")
        }
    }
}

window.customElements.define('game-audio', GameAudio)

function playaud(audobj)
{
    audobj.play()
}

function changesprite(spriteobj, path)
{
    spriteobj.texture = PIXI.Texture.from(path)
}

function changex(obj, val)
{
    obj.x = val
}

function changey(obj, val)
{
    obj.y = val
}

function changetext(txt, val)
{
    txt.text = val
}

function destroyobj(obj, objticker = null)
{
    if (objticker != null)
    {
        objticker.destroy()
        objticker = undefined
        delete(objticker)
    }
    obj.destroy(true)
    obj = undefined
    delete(obj)
}

function createobj(name, sprite, x, y, width, height)
{
    let ccode = ""
    let elresult = `window.${name} = PIXI.Sprite.from("${sprite}"); window.app.stage.addChild(${name}); ${name}.width = ${width};  ${name}.height = ${height}; ${name}.x = ${x}; ${name}.y = ${y};`
    ccode = ccode.concat(elresult)
    Function(ccode)()
}

function createenemy(name, sprite, x, y, width, height, player, speed, colcode)
{
    let ccode = ""
    let elresult = `window.${name} = PIXI.Sprite.from("${sprite}");window.app.stage.addChild(${name}); ${name}.width = ${width};  ${name}.height = ${height}; ${name}.x = ${x}; ${name}.y = ${y};`
    ccode = ccode.concat(elresult)
    let collisioncode = `function aabbcol(a, b){let abox = a.getBounds(); let bbox = b.getBounds(); return abox.x + abox.width > bbox.x && abox.x < bbox.width + bbox.x && abox.y + abox.height > bbox.y && abox.y < bbox.y + bbox.height;};`
    ccode = ccode.concat(collisioncode)
    colcode = colcode.replace("self", name)
    colcode = colcode.replace("selfticker", `${name}ticker`)
    colcode = interpretehgelang(colcode, false)
    let movecode = `function angleBetweenPoints(a, b){var posx = b.x - a.x; posy = b.y - a.y; var total = Math.sqrt(posx * posx + posy * posy); var totx = posx / total; var toty = posy / total; var rx = totx * ${speed}; var ry = toty * ${speed}; return [rx, ry]}; window.${name}ticker = new PIXI.Ticker; ${name}ticker.add(() => { let angletogo = angleBetweenPoints({x: ${name}.x, y: ${name}.y}, {x: ${player}.x, y: ${player}.y}); ${name}.x += angletogo[0]; ${name}.y += angletogo[1]; if (aabbcol(${player}, ${name})){${colcode}};}); ${name}ticker.start()`
    ccode = ccode.concat(movecode)
    Function(ccode)()
}

function createplayer(name, sprite, x, y, width, height, speed)
{
    let ccode = ""
    let elresult = `window.${name} = PIXI.Sprite.from("${sprite}");window.app.stage.addChild(${name}); ${name}.width = ${width};  ${name}.height = ${height}; ${name}.x = ${x}; ${name}.y = ${y};`
    ccode = ccode.concat(elresult)
    let movecode = `let keys = {}; window.addEventListener("keydown", (e) => {keys[e.keyCode] = true}); window.addEventListener("keyup", (e) => {keys[e.keyCode] = false}); app.ticker.add(() => {if (keys["87"]){${name}.y -= ${speed}}; if (keys["83"]){${name}.y += ${speed}}; if (keys["65"]){${name}.x -= ${speed}}; if (keys["68"]){${name}.x += ${speed}};});`                    
    ccode = ccode.concat(movecode)
    Function(ccode)()
}

function resizetowindow()
{
    let ccode = `
    app.renderer.resize(window.innerWidth, window.innerHeight)
    function resizef() {

        app.view.style.width = window.innerWidth + 'px';
        app.view.style.height = window.innerHeight + 'px';
    
    }
    resizef();`
    Function(ccode)()
}

function interpretehgelang(hgecode, shouldloop)
{
    let resultcode = ""
    if (!shouldloop)
    {
        resultcode = resultcode.concat(hgecode)
    }
    else 
    {
        resultcode = resultcode.concat(`app.ticker.add((delta) => {${hgecode}})`)
    }
    return resultcode
}

Function(compiledresult)()
