window.__require = function t(e, o, r) {
function i(n, s) {
if (!o[n]) {
if (!e[n]) {
var a = n.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(a, !0);
if (c) return c(a, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = a;
}
var u = o[n] = {
exports: {}
};
e[n][0].call(u.exports, function(t) {
return i(e[n][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[n].exports;
}
for (var c = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
return i;
}({
colorCard: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "08e55x4y8NPTaMhquo0TRmb", "colorCard");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var i, c = arguments.length, n = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(e, o, n) : i(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, a = n.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cardcolor = null;
e.numberLabel = null;
e.colorSprites = [];
e._value = 0;
e._suit = 0;
e._isJoker = !1;
return e;
}
e.prototype.init = function(t, e, o) {
void 0 === o && (o = !1);
this._value = t;
this._suit = e;
this._isJoker = o;
this.updateDisplay();
};
e.prototype.updateDisplay = function() {
this._isJoker || this._suit % 2 == 0 ? this.numberLabel.node.color = cc.color(255, 0, 0) : this.numberLabel.node.color = cc.color(0, 0, 0);
if (this._isJoker) {
this.numberLabel.string = (this._value, "King");
this.cardcolor.spriteFrame = this.colorSprites[4];
this.cardcolor.node.height = this.colorSprites[4].getRect().height;
} else {
this._value, this._suit;
this.cardcolor.spriteFrame = this.colorSprites[this._suit];
this.cardcolor.node.width = this.colorSprites[this._suit].getRect().width;
this.cardcolor.node.height = this.colorSprites[this._suit].getRect().height;
switch (this._value) {
case 1:
this.numberLabel.string = "A";
break;

case 11:
this.numberLabel.string = "J";
break;

case 12:
this.numberLabel.string = "Q";
break;

case 13:
this.numberLabel.string = "K";
break;

default:
this.numberLabel.string = this._value.toString();
}
}
};
Object.defineProperty(e.prototype, "value", {
get: function() {
return this._value;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "suit", {
get: function() {
return this._suit;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isJoker", {
get: function() {
return this._isJoker;
},
enumerable: !1,
configurable: !0
});
c([ a(cc.Sprite) ], e.prototype, "cardcolor", void 0);
c([ a(cc.Label) ], e.prototype, "numberLabel", void 0);
c([ a(cc.SpriteFrame) ], e.prototype, "colorSprites", void 0);
return c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
colorHall: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2d0c2LPcWhCl7Tp3lx9K9P6", "colorHall");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var i, c = arguments.length, n = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(e, o, n) : i(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, a = n.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnClip = null;
return e;
}
o = e;
e.prototype.start = function() {};
e.prototype.clickGame = function(t, e) {
cc.audioEngine.playEffect(this.btnClip, !1);
o.gameLevel = parseInt(e);
cc.director.loadScene("colorMatrix");
};
var o;
e.gameLevel = 0;
c([ a(cc.AudioClip) ], e.prototype, "btnClip", void 0);
return o = c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
colorLoad: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "db3fddzx7pKJb2U+jxtjI7O", "colorLoad");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var i, c = arguments.length, n = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(e, o, n) : i(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, a = (n.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {
this.scheduleOnce(function() {
cc.director.loadScene("colorHall");
}, 2);
};
return c([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
colorMatrixResult: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a7223IPjtNOObseh2CvTSp6", "colorMatrixResult");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var i, c = arguments.length, n = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(e, o, n) : i(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, s = n.ccclass, a = n.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scoreLabel = null;
e.highScoreLabel = null;
e.restartBtn = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.show = function(t) {
var e = parseInt(cc.sys.localStorage.getItem("highScore") || "0");
t > e && cc.sys.localStorage.setItem("highScore", t + "");
this.scoreLabel.string = "Sorce：" + t;
this.highScoreLabel.string = "Highest：" + Math.max(t, e);
this.node.active = !0;
this.node.scale = 0;
cc.tween(this.node).to(.3, {
scale: 1
}, {
easing: "backOut"
}).start();
};
c([ a(cc.Label) ], e.prototype, "scoreLabel", void 0);
c([ a(cc.Label) ], e.prototype, "highScoreLabel", void 0);
c([ a(cc.Button) ], e.prototype, "restartBtn", void 0);
return c([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
colorMatrix: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fabccXwoiNL16u+5krOSUJp", "colorMatrix");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), c = this && this.__decorate || function(t, e, o, r) {
var i, c = arguments.length, n = c < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (c < 3 ? i(n) : c > 3 ? i(e, o, n) : i(e, o)) || n);
return c > 3 && n && Object.defineProperty(e, o, n), n;
}, n = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
var r = Array(t), i = 0;
for (e = 0; e < o; e++) for (var c = arguments[e], n = 0, s = c.length; n < s; n++, 
i++) r[i] = c[n];
return r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./colorCard"), a = t("./colorHall"), l = t("./colorMatrixResult"), u = cc._decorator, p = u.ccclass, h = u.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cardPrefab = null;
e.gameBoard = null;
e.timeLabel = null;
e.scoreLabel = null;
e.ruleDlg = null;
e.resultUI = null;
e.Line = null;
e.bgClip = null;
e.btnClip = null;
e.clearClip = null;
e.winendClip = null;
e.cards = [];
e.cardPool = [];
e.score = 0;
e.timeRemaining = 180;
e.isGameActive = !1;
e.selectedCard = null;
e.iscanTouch = !1;
e.gPositon = [ [ {
x: -280,
y: -350
}, {
x: -140,
y: -350
}, {
x: 0,
y: -350
}, {
x: 140,
y: -350
}, {
x: 280,
y: -350
} ], [ {
x: -280,
y: -175
}, {
x: -140,
y: -175
}, {
x: 0,
y: -175
}, {
x: 140,
y: -175
}, {
x: 280,
y: -175
} ], [ {
x: -280,
y: 0
}, {
x: -140,
y: 0
}, {
x: 0,
y: 0
}, {
x: 140,
y: 0
}, {
x: 280,
y: 0
} ], [ {
x: -280,
y: 175
}, {
x: -140,
y: 175
}, {
x: 0,
y: 175
}, {
x: 140,
y: 175
}, {
x: 280,
y: 175
} ], [ {
x: -280,
y: 350
}, {
x: -140,
y: 350
}, {
x: 0,
y: 350
}, {
x: 140,
y: 350
}, {
x: 280,
y: 350
} ] ];
return e;
}
e.prototype.onLoad = function() {
cc.audioEngine.stopAll();
cc.audioEngine.playMusic(this.bgClip, !0);
for (var t = 0; t < 5; t++) {
this.cards[t] = [];
for (var e = 0; e < 5; e++) this.gPositon[t][e].y -= 60;
}
this.ruleDlg.active = !1;
this.startGame();
this.setupTouchEvents();
};
e.prototype.onClose = function() {
cc.director.loadScene("colorHall");
};
e.prototype.initResultUI = function() {
this.resultUI.node.active = !1;
};
e.prototype.initGame = function() {
this.score = 0;
this.timeRemaining = 180;
a.default.gameLevel > 1 && (this.timeRemaining = 120);
this.isGameActive = !0;
this.initCards();
};
e.prototype.initCards = function() {
var t = this.createDeck([ 0, 1, 2, 3 ]);
this.shuffleArray(t);
this.createInitialLayout(t);
};
e.prototype.continueGame = function() {
var t = this;
cc.audioEngine.playEffect(this.btnClip, !1);
this.score = 0;
this.timeRemaining = 180;
a.default.gameLevel > 1 && (this.timeRemaining = 120);
this.scoreLabel.string = "Sorce: " + this.score;
this.isGameActive = !0;
this.scheduleOnce(function() {
return t.startGame();
}, .5);
this.resultUI.node.active = !1;
};
e.prototype.clickShowRule = function() {
cc.audioEngine.playEffect(this.btnClip, !1);
this.ruleDlg.active = !this.ruleDlg.active;
};
e.prototype.startGame = function() {
var t = this;
this.gameBoard.removeAllChildren(!0);
this.initResultUI();
this.initGame();
this.iscanTouch = !0;
this.scheduleOnce(function() {
return t.checkMatches();
}, 1.5);
};
e.prototype.createDeck = function(t) {
for (var e = [], o = 0, r = t; o < r.length; o++) for (var i = r[o], c = 1; c <= 13; c++) e.push({
value: c,
suit: i,
isJoker: !1
});
if (a.default.gameLevel < 1) {
e.push({
value: 1,
suit: 0,
isJoker: !0
});
e.push({
value: 2,
suit: 0,
isJoker: !0
});
}
return e;
};
e.prototype.shuffleArray = function(t) {
for (var e, o = t.length - 1; o > 0; o--) {
var r = Math.floor(Math.random() * (o + 1));
e = [ t[r], t[o] ], t[o] = e[0], t[r] = e[1];
}
};
e.prototype.createInitialLayout = function(t) {
for (var e = this, o = 0; o < 5; o++) {
this.cards[o] = [];
for (var r = 0; r < 5; r++) {
var i = t.pop(), c = cc.instantiate(this.cardPrefab), n = c.getComponent(s.default);
n.init(i.value, i.suit, i.isJoker);
c.setPosition(this.gPositon[o][r].x, this.gPositon[o][r].y);
this.gameBoard.addChild(c);
this.cards[o][r] = n;
}
}
t.forEach(function(t) {
var o = cc.instantiate(e.cardPrefab).getComponent(s.default);
o.init(t.value, t.suit, t.isJoker);
e.cardPool.push(o);
});
};
e.prototype.setupTouchEvents = function() {
this.gameBoard.on(cc.Node.EventType.TOUCH_START, this.onCardTouch, this);
};
e.prototype.onCardTouch = function(t) {
if (this.isGameActive && this.iscanTouch) {
var e = this.gameBoard.convertToNodeSpaceAR(t.getLocation()), o = this.getCardPosition(e), r = o.row, i = o.col;
r < 0 || i < 0 || (this.selectedCard ? this.trySwapCards(r, i) : this.selectCard(r, i));
}
};
e.prototype.getCardPosition = function(t) {
for (var e = 0; e < this.gPositon.length; ++e) for (var o = 0; o < this.gPositon[e].length; ++o) if (Math.abs(t.x - this.gPositon[e][o].x) < 45 && Math.abs(t.y - this.gPositon[e][o].y) < 75) return {
row: e,
col: o
};
return {
row: -1,
col: -1
};
};
e.prototype.selectCard = function(t, e) {
if (this.cards[t][e]) {
var o = this.cards[t][e].node;
o.scale = 1.1;
this.selectedCard = {
node: o,
row: t,
col: e
};
}
};
e.prototype.trySwapCards = function(t, e) {
var o = this, r = this.selectedCard, i = r.row, c = r.col;
if (Math.abs(t - i) + Math.abs(e - c) === 1) {
this.swapCards(i, c, t, e);
this.checkMatches(function() {
console.log(" trySwapCards  换回  ", i, c, t, e);
o.scheduleOnce(function() {
o.iscanTouch = !0;
o.swapCards(i, c, t, e);
}, .8);
});
}
this.selectedCard.node.scale = 1;
this.selectedCard = null;
};
e.prototype.swapCards = function(t, e, o, r) {
var i = this.cards[t][e];
this.cards[t][e] = this.cards[o][r];
this.cards[o][r] = i;
var c = this.cards[t][e].node.position, n = this.cards[o][r].node.position;
cc.tween(this.cards[t][e].node).to(.2, {
position: n
}).start();
cc.tween(this.cards[o][r].node).to(.2, {
position: c
}).start();
};
e.prototype.update = function(t) {
if (this.isGameActive) {
this.timeRemaining -= t;
this.timeRemaining <= 0 ? this.gameOver() : this.updateTimeDisplay();
}
};
e.prototype.updateTimeDisplay = function() {
Math.floor(this.timeRemaining / 60), Math.floor(this.timeRemaining % 60);
this.timeLabel.string = "Times：" + parseInt(this.timeRemaining + "");
};
e.prototype.checkMatches = function(t) {
var e = this;
void 0 === t && (t = null);
var o = this.findMatches();
o.length > 0 ? this.scheduleOnce(function() {
e.removeMatches(o);
e.updateScore(o);
e.scheduleOnce(function() {
e.fillEmptySpaces();
}, .8);
}, .2) : t && t();
cc.ParticleSystem;
};
e.prototype.findMatches = function() {
for (var t = [], e = 0; e < 5; e++) {
for (var o = "", r = 0; r < 5; r++) this.cards[e][r] && ((l = this.cards[e][r]).isJoker ? o += " 王" : o += " " + l.suit);
console.log(o);
}
for (e = 0; e < 5; e++) {
var i = [], c = -1, s = "-- ", a = !1;
for (r = 0; r < 5; r++) if (l = this.cards[e][r]) if (l.isJoker || l.suit === c) {
a = !!l.isJoker;
i.push({
row: e,
col: r
});
} else {
if (i.length >= 3) {
a = !1;
t.push(n(i));
}
a ? (i = [ {
row: e,
col0: r - 1
} ]).push({
row: e,
col: r
}) : i = [ {
row: e,
col: r
} ];
c = l.suit;
a = !1;
}
if (i.length >= 3) {
console.log(s);
console.log(JSON.stringify(i));
t.push(i);
}
}
for (r = 0; r < 5; r++) {
for (i = [], c = -1, s = "== ", a = !1, e = 0; e < 5; e++) {
var l;
if (l = this.cards[e][r]) if (l.isJoker || l.suit === c) {
a = !!l.isJoker;
i.push({
row: e,
col: r
});
} else {
if (i.length >= 3) {
a = !1;
t.push(n(i));
}
a ? (i = [ {
row: e,
col0: r - 1
} ]).push({
row: e,
col: r
}) : i = [ {
row: e,
col: r
} ];
c = l.suit;
a = !1;
}
}
if (i.length >= 3) {
console.log(s);
console.log(JSON.stringify(i));
t.push(i);
}
}
return t;
};
e.prototype.removeMatches = function(t) {
var e = this;
this.iscanTouch = !1;
t.forEach(function(t) {
t.forEach(function(t) {
var o = t.row, r = t.col, i = e.cards[o][r];
if (i) {
cc.audioEngine.playEffect(e.clearClip, !1);
i.node.stopAllActions();
var c = "part_" + o + r, n = cc.instantiate(e.Line);
n.parent = e.gameBoard;
n.name = c;
n.x = e.gPositon[o][r].x;
n.y = e.gPositon[o][r].y;
console.log(" removeMatches  ", e.gPositon[o][r].x, e.gPositon[o][r].y);
console.log(" removeMatches row col  ", o, r);
e.scheduleOnce(function() {
n.destroy();
e.gameBoard.removeChild(n);
}, .5);
cc.tween(i.node).to(.2, {
scale: 0
}).call(function() {
e.cardPool.push(i);
e.cards[o][r] = null;
}).start();
}
});
});
};
e.prototype.updateScore = function(t) {
var e = this, o = 0;
t.forEach(function(r) {
var i = 10 * r.length;
i += 20 * r.reduce(function(t, o) {
var r = o.row, i = o.col;
return e.cards[r][i] ? t + (e.cards[r][i].isJoker ? 1 : 0) : 0;
}, 0);
t.length > 1 && (i *= 1.5);
o += i;
});
this.score += o;
this.scoreLabel.string = "Sorce: " + this.score;
};
e.prototype.fillEmptySpaces = function() {
var t = this;
this.fillCurentCard();
this.scheduleOnce(function() {
for (var e = 0; e < 5; e++) {
for (var o = " row:" + e, r = 0; r < 5; r++) if (!t.cards[e][r]) {
o += " - " + r + " ,";
t.fillNewCard(e, r);
}
console.log(o);
}
t.iscanTouch = !0;
t.scheduleOnce(function() {
return t.checkMatches();
}, .8);
}, .5);
};
e.prototype.fillCurentCard = function() {
for (var t = 0; t < 5; t++) {
for (var e = -1, o = 0; o < 5; o++) if (!this.cards[o][t]) {
e = o;
break;
}
-1 !== e && this.dropCards(t, e);
}
};
e.prototype.dropCards = function(t, e) {
for (var o = e; o < 5; o++) if (this.cards[o][t]) {
var r = this.findLowestEmptySpace(t, o);
r !== o && this.moveCard(o, t, r, t);
}
};
e.prototype.findLowestEmptySpace = function(t, e) {
for (var o = e, r = e - 1; r >= 0; r--) this.cards[r][t] || (o = r);
return o;
};
e.prototype.moveCard = function(t, e, o, r) {
var i = this.cards[t][e];
this.cards[o][r] = i;
this.cards[t][e] = null;
var c = cc.v3(this.gPositon[o][r].x, this.gPositon[o][r].y);
i.node.stopAllActions();
cc.tween(i.node).to(.2, {
position: c
}).start();
};
e.prototype.fillNewCard = function(t, e) {
if (0 !== this.cardPool.length) {
var o = Math.floor(Math.random() * this.cardPool.length), r = this.cardPool.splice(o, 1)[0];
console.log(" fillNewCard: row:" + t + "  col:" + e + "  card:" + r.value, "  " + r.suit);
var i = cc.instantiate(this.cardPrefab), c = i.getComponent(s.default);
c.init(r.value, r.suit, r.isJoker);
i.setPosition(this.gPositon[t][e].x, this.gPositon[t][e].y);
this.gameBoard.addChild(i);
this.cards[t][e] = c;
i.position = cc.v3(this.gPositon[4][e].x, this.gPositon[4][e].y + 300);
console.log(" fillNewCard: position:" + r.node.position.x + "  " + r.node.position.y);
cc.tween(i).to(.3, {
position: cc.v3(this.gPositon[t][e].x, this.gPositon[t][e].y)
}).start();
}
};
e.prototype.gameOver = function() {
this.isGameActive = !1;
this.unscheduleAllCallbacks();
this.showResult();
};
e.prototype.showResult = function() {
this.resultUI.getComponent("colorMatrixResult").show(this.score);
};
e.prototype.restartGame = function() {
this.cards = [];
this.cardPool = [];
this.gameBoard.removeAllChildren();
this.initGame();
};
c([ h(cc.Prefab) ], e.prototype, "cardPrefab", void 0);
c([ h(cc.Node) ], e.prototype, "gameBoard", void 0);
c([ h(cc.Label) ], e.prototype, "timeLabel", void 0);
c([ h(cc.Label) ], e.prototype, "scoreLabel", void 0);
c([ h(cc.Node) ], e.prototype, "ruleDlg", void 0);
c([ h(l.default) ], e.prototype, "resultUI", void 0);
c([ h(cc.Prefab) ], e.prototype, "Line", void 0);
c([ h(cc.AudioClip) ], e.prototype, "bgClip", void 0);
c([ h(cc.AudioClip) ], e.prototype, "btnClip", void 0);
c([ h(cc.AudioClip) ], e.prototype, "clearClip", void 0);
c([ h(cc.AudioClip) ], e.prototype, "winendClip", void 0);
return c([ p ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./colorCard": "colorCard",
"./colorHall": "colorHall",
"./colorMatrixResult": "colorMatrixResult"
} ]
}, {}, [ "colorCard", "colorHall", "colorLoad", "colorMatrix", "colorMatrixResult" ]);