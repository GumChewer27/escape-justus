namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Laser = SpriteKind.create()
    export const LaserEnd = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Bouncy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.placeOnTile(PlayerOne, tiles.getTileLocation(36, 28))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerOne.isHittingTile(CollisionDirection.Bottom)) {
        PlayerOne.vy = -190
    } else if (PlayerOne.isHittingTile(CollisionDirection.Left)) {
        PlayerOne.vy = -150
    } else if (PlayerOne.isHittingTile(CollisionDirection.Right)) {
        PlayerOne.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Laser, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.placeOnTile(PlayerOne, tiles.getTileLocation(30, 32))
})
function DistanceFormula (start: Sprite, end: Sprite) {
    xDistance = start.x - end.x
    yDistance = start.x - end.x
}
function CreateLasers () {
    LaserStart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . 2 f 
        . . . . . . . . . . . . . . 2 f 
        . . . . . . . . . . . . . . 2 f 
        . . . . . . . . . . . . . . 2 f 
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    LaserEnd = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        f f . . . . . . . . . . . . . . 
        f 2 . . . . . . . . . . . . . . 
        f 2 . . . . . . . . . . . . . . 
        f 2 . . . . . . . . . . . . . . 
        f 2 . . . . . . . . . . . . . . 
        f f . . . . . . . . . . . . . . 
        f . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LaserEnd)
    tiles.placeOnTile(LaserStart, tiles.getTileLocation(14, 6))
    tiles.placeOnTile(LaserEnd, tiles.getTileLocation(7, 6))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bouncy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        PlayerOne.vy = -250
    }
})
let Laser: Sprite = null
let LaserEnd: Sprite = null
let LaserStart: Sprite = null
let yDistance = 0
let xDistance = 0
let BouncyStuff: Sprite = null
let Health: Sprite = null
let Coin: Sprite = null
let PlayerOne: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(11)
PlayerOne = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(PlayerOne, 100, 0)
tiles.placeOnTile(PlayerOne, tiles.getTileLocation(3, 10))
PlayerOne.ay = 350
scene.cameraFollowSprite(PlayerOne)
CreateLasers()
characterAnimations.loopFrames(
PlayerOne,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingRight)
)
characterAnimations.loopFrames(
PlayerOne,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `],
500,
characterAnimations.rule(Predicate.FacingLeft)
)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    Coin = sprites.create(img`
        . . . f f f f f f f . . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 4 4 4 4 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . . f f f f f f f . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(Coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    Coin,
    [img`
        . . . f f f f f f f . . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . f 5 5 4 4 4 4 4 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 4 5 5 5 5 5 5 5 5 5 f 
        f 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 4 4 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . . f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . f 5 5 4 4 4 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . . f f f f f . . . . 
        `,img`
        . . . . . f f f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 4 5 5 f . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f f f . . . . . 
        `,img`
        . . . . . . f . . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . . f . . . . . . 
        `,img`
        . . . . . . f . . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . . f . . . . . . 
        `,img`
        . . . . . . f . . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . . f . . . . . . 
        `,img`
        . . . . . . f . . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . . f . . . . . . 
        `,img`
        . . . . . . f . . . . . . 
        . . . . . f 5 f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f 5 f . . . . . 
        . . . . . . f . . . . . . 
        `,img`
        . . . . . f f f . . . . . 
        . . . . f 5 5 5 f . . . . 
        . . . f 5 5 4 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 4 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 4 5 5 f . . . 
        . . . . f 5 5 5 f . . . . 
        . . . . . f f f . . . . . 
        `,img`
        . . . . f f f f f . . . . 
        . . . f 5 5 5 5 5 f . . . 
        . . f 5 5 4 4 4 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 4 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 4 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 f . . . 
        . . . . f f f f f . . . . 
        `],
    100,
    true
    )
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    Health = sprites.create(img`
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ..........................
        ....2........2........2...
        ...222......222......222..
        ...222......222......222..
        ..22222....22222....22222.
        ..22222....22222....22222.
        .2222222..2222222..2222222
        `, SpriteKind.Laser)
    tiles.placeOnTile(Health, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Health = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f . . 
        . f f 1 1 1 1 1 1 1 1 1 1 f f . 
        . f 1 1 1 1 1 7 7 1 1 1 1 1 f . 
        . f 1 1 1 1 7 7 7 7 1 1 1 1 f . 
        . f 1 1 1 1 7 7 7 7 1 1 1 1 f . 
        . f 1 1 1 1 1 7 7 1 1 1 1 1 f . 
        . f f 1 1 1 1 1 1 1 1 1 1 f f . 
        . . f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Health)
    tiles.placeOnTile(Health, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    BouncyStuff = sprites.create(img`
        . . . . c c c c c c c . . . . . 
        . . c c a a a a a a a c c . . . 
        . c a a a a a a a a a a a c . . 
        . c a a a a a a a a a a a c . . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        c a a a a a a a a a a a a a c . 
        . c a a a a a a a a a a a c . . 
        . c a a a a a a a a a a a c . . 
        . . c c a a a a a a a c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bouncy)
    tiles.placeOnTile(BouncyStuff, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runMovementAnimation(
    BouncyStuff,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
}
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(1500, function () {
    Laser = sprites.createProjectileFromSprite(img`
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 
        `, LaserStart, -60, 0)
    Laser.setKind(SpriteKind.Laser)
})
