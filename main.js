kaboom({
    width: 1390,
    height: 710,
    scale: 0.9,
    debug: false
})

loadSprite("background", "assets/background/background_layer_1.png")
loadSprite("trees", "assets/background/background_layer_2.png")
loadSpriteAtlas("assets/oak_woods_tileset.png", {
    "golden-ground": {
        "x": 16,
        "y": 0,
        "width": 16,
        "height": 16
    },
    "deep-ground": {
        "x": 16,
        "y": 32,
        "width": 16,
        "height": 16
    },
    "silver-ground": {
        "x": 150,
        "y": 0,
        "width": 16,
        "height": 16
    }
})

loadSprite("shop", "assets/shop_anim.png", {
    sliceX:6,
    sliceY:1,
    anims: {
        "default": {
            from:0,
            to: 5,
            speed:12,
            loop:true
        }
    }
})
loadSprite("fence", "assets/fence_1.png");
loadSprite("sign", "assets/sign.png");

scene("main", () => {
    const background = add([
        sprite("background"),
        scale(5)
    ])
})

go("main")