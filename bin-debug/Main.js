//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    /**
     * 加载进度界面
     * Process interface loading
     */
    function Main() {
        var _this = _super.call(this) || this;
        _this.down = false;
        _this.speed = 8;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
                console.log('hello,world');
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //设置加载进度界面
        //Config to load process interface
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
        this.textfield = new egret.TextField();
        this.textfield.size = 80;
        this.textfield.textColor = 0x000000;
        this.textfield.fontFamily = '微软雅黑';
        this.textfield.x = 250;
        this.textfield.y = 400;
        this.stage.addChild(this.textfield);
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.stage.removeChild(this.textfield);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.textfield.text = Math.floor(event.itemsLoaded / event.itemsTotal * 100).toString() + '%';
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        this.sprite1 = new egret.Sprite();
        this.stage.addChild(this.sprite1);
        this.sprite2 = new egret.Sprite();
        this.stage.addChild(this.sprite2);
        this.sprite3 = new egret.Sprite();
        this.stage.addChild(this.sprite3);
        var bg = this.createBitmapByName('bg1_png');
        this.sprite1.addChild(bg);
        var zi1 = this.createBitmapByName('escape_png');
        this.sprite1.addChild(zi1);
        zi1.x = 110;
        zi1.y = 100;
        var zi2 = this.createBitmapByName('from_png');
        this.sprite1.addChild(zi2);
        zi2.x = 20;
        zi2.y = 400;
        var day1 = this.createBitmapByName('p21_png');
        this.sprite1.addChild(day1);
        day1.x = 90;
        day1.y = 150;
        var za1 = this.createBitmapByName('h2_png');
        this.sprite1.addChild(za1);
        za1.anchorOffsetX = za1.width;
        za1.x = 850;
        za1.y = 250;
        var loop1 = function () {
            egret.Tween.get(zi1).to({
                y: zi1.y - 50
            }, 1000).call(function () {
                egret.Tween.get(zi1).to({ y: 110 }, 1000).call(loop1);
            });
        };
        loop1();
        var loop2 = function () {
            egret.Tween.get(zi2).to({
                y: zi2.y + 50
            }, 1000).call(function () {
                egret.Tween.get(zi2).to({ y: 400 }, 1000).call(loop2);
            });
        };
        loop2();
        var za2 = this.createBitmapByName('h2_png');
        this.sprite1.addChild(za2);
        za2.anchorOffsetX = za2.width;
        za2.scaleX = -1;
        za2.x = -210;
        za2.y = 250;
        var startbtn = this.createBitmapByName('btnStart_png');
        this.sprite1.addChild(startbtn);
        startbtn.x = 250;
        startbtn.y = 800;
        startbtn.touchEnabled = true;
        startbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.scene2, this);
    };
    Main.prototype.scene2 = function () {
        this.down = false;
        this.sprite1.removeChildren();
        this.sprite2.removeChildren();
        this.sprite3.removeChildren();
        this.mone = this.createBitmapByName('mone_png');
        this.sprite2.addChild(this.mone);
        this.mone.x = 640 / 2 - this.mone.width / 2;
        this.mone.y = 1000;
        this.stage.addEventListener(egret.Event.ENTER_FRAME, this.downvoid, this);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0);
        shape.graphics.drawRect(0, 0, 640, 1136);
        shape.graphics.endFill();
        this.sprite2.addChild(shape);
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click, this);
        var bg = this.createBitmapByName('bg1_png');
        this.sprite1.addChild(bg);
        var bg2 = this.createBitmapByName('bg1_png');
        this.sprite1.addChild(bg2);
        bg2.y = -640;
        this.createza();
        this.sprite3.getChildAt(0).y = 1136 * (2 / 3);
        this.sprite3.getChildAt(1).y = 1136 * (2 / 3);
        this.createza();
        this.sprite3.getChildAt(2).y = 1136 / 3;
        this.sprite3.getChildAt(3).y = 1136 / 3;
        this.createza();
        this.sprite3.getChildAt(4).y = 0;
        this.sprite3.getChildAt(5).y = 0;
        this.stage.addEventListener(egret.Event.ENTER_FRAME, this.moveza, this);
        this.stage.addEventListener(egret.Event.ENTER_FRAME, this.check, this);
    };
    Main.prototype.downvoid = function () {
        if (this.down) {
            if (this.speed <= 20) {
                this.mone.y += 2;
            }
        }
        this.mone.y += this.speed;
    };
    Main.prototype.click = function () {
        this.down = false;
        this.speed = 5;
        this.timer = new egret.Timer(0, 8);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.moneup, this);
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.downtrue, this);
    };
    Main.prototype.moneup = function () {
        this.timer.delay = 0.01;
        if (this.mone.y - 20 <= 500) {
            for (var index = 0; index < this.sprite1.numChildren; index++) {
                this.sprite1.getChildAt(index).y += 20;
                if (this.sprite1.getChildAt(index).y + 20 >= 640) {
                    this.sprite1.removeChildAt(index);
                    this.addbg();
                }
                else {
                    this.sprite1.getChildAt(index).y += 20;
                }
            }
            if (this.sprite3.getChildAt(0).y + 20 >= 1136) {
                this.sprite3.removeChildAt(0);
                this.sprite3.removeChildAt(0);
                this.createza();
            }
            for (var index = 0; index < this.sprite3.numChildren; index++) {
                this.sprite3.getChildAt(index).y += 20;
            }
        }
        else {
            this.mone.y -= 20;
        }
    };
    Main.prototype.downtrue = function () {
        this.down = true;
    };
    Main.prototype.addbg = function () {
        var bg = this.createBitmapByName('bg1_png');
        this.sprite1.addChild(bg);
        bg.y = -640;
    };
    Main.prototype.createza = function () {
        var za = this.createBitmapByName('h2_png');
        this.sprite3.addChild(za);
        za.x = 320;
        za['tag'] = 'right';
        za['left'] = true;
        // za.y = -za.height;
        var zax = Math.random() * 320 + 320;
        za.x = zax;
        var za2 = this.createBitmapByName('h2_png');
        this.sprite3.addChild(za2);
        za2.x = 320;
        za2.scaleX = -1;
        za2['tag'] = 'left';
        // za2.y = -za2.height;
        var za2x = Math.random() * 320;
        za2.x = za2x;
        za2['left'] = true;
    };
    Main.prototype.moveza = function () {
        for (var index = 0; index < this.sprite3.numChildren; index++) {
            if (this.sprite3.getChildAt(index)['tag'] == 'right') {
                if (this.sprite3.getChildAt(index).x >= 640) {
                    this.sprite3.getChildAt(index)['left'] = true;
                }
                if (this.sprite3.getChildAt(index).x <= 320) {
                    this.sprite3.getChildAt(index)['left'] = false;
                }
                if (this.sprite3.getChildAt(index)['left']) {
                    this.sprite3.getChildAt(index).x -= 3;
                }
                else {
                    this.sprite3.getChildAt(index).x += 3;
                }
            }
            else {
                if (this.sprite3.getChildAt(index).x >= 320) {
                    this.sprite3.getChildAt(index)['left'] = false;
                }
                if (this.sprite3.getChildAt(index).x <= 0) {
                    this.sprite3.getChildAt(index)['left'] = true;
                }
                if (this.sprite3.getChildAt(index)['left']) {
                    this.sprite3.getChildAt(index).x += 3;
                }
                else {
                    this.sprite3.getChildAt(index).x -= 3;
                }
            }
        }
    };
    Main.prototype.check = function () {
        var rectangle = new egret.Rectangle(this.mone.x, this.mone.y, this.mone.width, this.mone.height);
        for (var index = 0; index < this.sprite3.numChildren; index++) {
            if (this.sprite3.getChildAt(index)['tag'] == 'right') {
                var rectangle2 = new egret.Rectangle(this.sprite3.getChildAt(index).x, this.sprite3.getChildAt(index).y, this.sprite3.getChildAt(index).width, this.sprite3.getChildAt(index).height);
                if (rectangle.intersects(rectangle2)) {
                    this.gameover();
                }
            }
            else {
                var rectangle2 = new egret.Rectangle(this.sprite3.getChildAt(index).x - this.sprite3.getChildAt(index).width, this.sprite3.getChildAt(index).y, this.sprite3.getChildAt(index).width, this.sprite3.getChildAt(index).height);
                if (rectangle.intersects(rectangle2)) {
                    this.gameover();
                }
            }
        }
    };
    Main.prototype.gameover = function () {
        this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.moveza, this);
        this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.check, this);
        this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.downvoid, this);
        this.sprite1.removeChildren();
        this.sprite2.removeChildren();
        this.sprite3.removeChildren();
        var bg = this.createBitmapByName('bg1_png');
        this.sprite1.addChild(bg);
        var btn = this.createBitmapByName('btnStart_png');
        this.sprite1.addChild(btn);
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.scene2, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map