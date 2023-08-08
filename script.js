// 提示
let tip = document.querySelector(".tip")
function tipEject(tip) {
    tip.style.display = "flex"
    tip.style.top = "30px"
    document.querySelector(".tip p").innerHTML = tip
}
// let tip1 = "你好"
// tipEject(tips1)


//时间
let time = new Date()
let timeHours = time.getHours()
let timeMinutes = time.getMinutes()
if (timeHours > 12) {

    timeHours -= 12
}

if (timeMinutes < 10) {
    timeMinutes = "0" + timeMinutes
}
document.querySelector(".dock-time-left").innerHTML = `${timeHours}:${timeMinutes}`

if (timeHours > 12) {
    document.querySelector(".dock-time-apm").innerHTML = "am"
} else {
    document.querySelector(".dock-time-apm").innerHTML = "pm"
}

let timeMonth = time.getMonth() + 1
let timeDate = time.getDate()
document.querySelector('.dock-time-date').innerHTML = `${timeMonth}-${timeDate}`

// 搜索
function search() {
    let searchValue = "https://www.baidu.com/s?word=" + document.querySelector(".search-input input").value;
    window.open(searchValue);
}

document.querySelector(".search-input input").addEventListener("keydown", function searchKey(e) {
    if (e.key === "Enter") {
        search()
    }
})

//输入框状态
const searchInput = document.querySelector(".search-input input")
const searchInputButton = document.querySelector(".search-input")
function searchFocus() {
    searchInputButton.style.width = "550px"
    searchInputButton.style.border = "2px solid #3366ff"
    document.querySelector(".dock").style.marginBottom = "-200px"
}

function searchBlur() {
    searchInputButton.style.width = "450px"
    if (style === 1) {
        searchInputButton.style.border = "6px solid #000"
    } else if (style === 2) {
        searchInputButton.style.border = "2px solid #858585"
    }
    document.querySelector(".dock").style.marginBottom = "50px"
}

// 菜单栏显示和返回
const useBg = document.querySelector(".use-bg")
const menuBg = document.querySelector(".menu")
function hdClick() {
    useBg.style.display = "flex"
    menuBg.style.display = "flex"
    let opacity = 0
    let fade = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05
            useBg.style.opacity = opacity
            menuBg.style.opacity = opacity
        } else {
            clearInterval(fade)
        }
    }, 10)
}

function hdReturn() {
    let opacity = 1
    let fade = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.05
            useBg.style.opacity = opacity
            menuBg.style.opacity = opacity
        } else {
            clearInterval(fade)
            useBg.style.display = "none"
            menuBg.style.display = "none"
        }
    }, 10)
}

// 菜单栏点击
let menu = 1
const setting = document.querySelector(".menu-left ul li:nth-of-type(1) button")
const history = document.querySelector(".menu-left ul li:nth-of-type(2) button")
const about = document.querySelector(".menu-left ul li:nth-of-type(3) button")

setting.style.border = "4px solid #fff"
about.style.border = "none"
history.style.border = "none"

setting.addEventListener("click", function () {
    menu = 1
    setting.style.border = "4px solid #fff"
    about.style.border = "none"
    history.style.border = "none"
    document.querySelector(".menu-right-history").style.display = "none"
    document.querySelector(".menu-right-about").style.display = "none"
    document.querySelector(".menu-right-setting").style.display = "flex"
})

history.addEventListener("click", function () {
    menu = 2
    history.style.border = "4px solid #fff"
    about.style.border = "none"
    setting.style.border = "none"
    document.querySelector(".menu-right-history").style.display = "flex"
    document.querySelector(".menu-right-setting").style.display = "none"
    document.querySelector(".menu-right-about").style.display = "none"
})

about.addEventListener("click", function () {
    menu = 3
    about.style.border = "4px solid #fff"
    setting.style.border = "none"
    history.style.border = "none"
    document.querySelector(".menu-right-history").style.display = "none"
    document.querySelector(".menu-right-setting").style.display = "none"
    document.querySelector(".menu-right-about").style.display = "flex"
})

//样式切换
const style1 = document.querySelector(".menu-right-setting-mode-content:nth-of-type(1)")
const style2 = document.querySelector(".menu-right-setting-mode-content:nth-of-type(2)")
const partsStyle = document.querySelectorAll(".parts-style")

let style
if(Number(localStorage.getItem("样式")) == null) {
    style = Number(localStorage.getItem("样式"))
} else {
    style = 1
}

function styleOne() {
    for (let i = 0; i < partsStyle.length; i++) {
        partsStyle[i].style.border = "6px solid #000"
    }
    document.querySelector(".dock-time-apm").style.color = "rgba(0, 0, 0, 0.6)"
    document.querySelector(".dock-time-date").style.color = "rgba(0, 0, 0, 0.32)"
}

function styleTwo() {
    for (let i = 0; i < partsStyle.length; i++) {
        partsStyle[i].style.border = "2px solid #858585"
    }
    document.querySelector(".dock-time-apm").style.color = "rgba(0, 0, 0, 0.6)"
    document.querySelector(".dock-time-date").style.color = "rgba(0, 0, 0, 0.32)"
}

if (style === 1) {
    styleOne()
} else {
    styleTwo()
}

style1.addEventListener("click", function () {
    style = 1
    styleOne()
    localStorage.setItem("样式", "1")
})

style2.addEventListener("click", function () {
    style = 2
    styleTwo()
    localStorage.setItem("样式", "2")
})

// 收藏夹显示和返回
const collectBg = document.querySelector(".collect")
function collectClick() {
    useBg.style.display = "flex"
    collectBg.style.display = "flex"
    let opacity = 0
    let fade = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05
            useBg.style.opacity = opacity
            collectBg.style.opacity = opacity
        } else {
            clearInterval(fade)
        }
    }, 10)
}

function collectReturn() {
    let opacity = 1
    let fade = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.05
            useBg.style.opacity = opacity
            collectBg.style.opacity = opacity
        } else {
            clearInterval(fade)
            useBg.style.display = "none"
            collectBg.style.display = "none"
        }
    }, 10)
}

// 收藏内容
const collectAdd = document.querySelector(".collect-add")
const collectAddContent = document.querySelector(".collect-add-content")
const collectAddButton = document.querySelector(".collect-add-button")
const collectUrlInput = document.querySelector(".collect-add-input-url input")
const collectNameInput = document.querySelector(".collect-add-input-name input")
let collectDisplay = 0
function collectAddClick() {
    collectDisplay++
    if (collectDisplay % 2 === 0) {
        collectAddContent.style.display = "none"
        document.querySelector(".collect-add img").style.transform = "rotate(0deg)"

    } else {
        collectAddContent.style.display = "flex"
        document.querySelector(".collect-add img").style.transform = "rotate(45deg)"
    }
}

document.querySelector(".dock-collect").addEventListener("click", () => {
    collectClick()
})
 
collectAdd.addEventListener("click", () => {
    collectAddClick()
})

let collectArr
if(localStorage.getItem("收藏") === null) {
    collectArr = []
}else {
    collectArr = localStorage.getItem("收藏").split("#")
}
let appNum = 0

function addCollect() {
    let collectLi = ""
    for (let i = 0; i < collectArr.length; i++) {
        let name = collectArr[i].split(",")[0]
        let url = collectArr[i].split(",")[1]
        collectLi += `<li id="collect-app-${collectArr.length}"><a href="${url}" target="_blank"><div class="collect-app-image">${name.charAt(0)}</div></a><p>${name}</p></li>`
    }
    document.querySelector(".collect-app ul").innerHTML = collectLi
}

addCollect()

collectAddButton.addEventListener("click", () => {
    let name = collectNameInput.value
    let url = collectUrlInput.value
    if (!(name === "" || url === "")) {
        if (name.indexOf("#") != -1 || url.indexOf("#") != -1) {
            name = ""
            url = ""
        }else if(url.indexOf("https://") != -1) {
            collectArr.push(`${name},${url},${collectArr.length - 1}`)
            localStorage.setItem("收藏",collectArr.join("#"))
            name = ""
            url = ""
            addCollect()
        } else if(!(name.length > 6)) {
            // tips
            collectArr.push(`${name},https://${url}`)
            localStorage.setItem("收藏", collectArr.join("#"))
            name = ""
            url = ""
            addCollect()
        }
    }
})

// 跳转收藏的网页
let collectDeleteNum = 0
let collectApp = document.querySelector(".collect-app li")
collectApp.addEventListener("click", () => {
    if(collectDeleteNum % 2 === 0) {
        let id = 
        window.open(collectArr);
    }
})

function collectDelete() {
    // document.querySelector(".collect-delete").backgroundColor = '#FF5964'
    
    /* if(collectDeleteNum === true) {
        collectDeleteNum = false
        console.log("你好")
        console.log(collectDeleteNum)

    }else if(collectDeleteNum === false) {
        collectDeleteNum= true
        console.log(collectDeleteNum)
        // for(let i; i < collectArr.length; i++) {
        //     collectArr[i][]
        // }
    } */
    collectDeleteNum++
    console.log(collectDeleteNum)
    if(collectDeleteNum % 2 === 0) {
        console.log("关闭")
    } else {
        
        collectApp.addEventListener("click", () => {
            console.log(collectApp.id)
        })
    }
}

// localStorage.clear() //删除所有数据