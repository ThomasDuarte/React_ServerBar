/* ORGanizer for Salesforce - v10000.0.9.53 
 * Author: Enrico Murru (https://organizer.solutions/)
 * Copyright 2016-2024
 */
!function(exports,global){define("game-space-invaders",["global","constants","jquery","popup-utils","jquery-ui"],function($G,$C,$,PopupUtils){"use sctrict";function getRandomArbitrary(min,max){return Math.random()*(max-min)+min}function clamp(num,min,max){return Math.min(Math.max(num,min),max)}function valueInRange(value,min,max){return value<=max&&value>=min}function checkRectCollision(A,B){var xOverlap=valueInRange(A.x,B.x,B.x+B.w)||valueInRange(B.x,A.x,A.x+A.w),yOverlap=valueInRange(A.y,B.y,B.y+B.h)||valueInRange(B.y,A.y,A.y+A.h);return xOverlap&&yOverlap}function initCanvas(canvasElement,contentDiv){container=contentDiv,canvas=canvasElement,ctx=canvas.getContext("2d"),setImageSmoothing(!1),spriteSheetImg=new Image,spriteSheetImg.src=SPRITE_SHEET_SRC,preDrawImages(),window.addEventListener("resize",resize),document.addEventListener("keydown",onKeyDown),document.addEventListener("keyup",onKeyUp)}function preDrawImages(){var canvas=drawIntoCanvas(2,8,function(ctx){ctx.fillStyle="white",ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height)});bulletImg=new Image,bulletImg.src=canvas.toDataURL()}function setImageSmoothing(value){ctx.imageSmoothingEnabled=value,ctx.mozImageSmoothingEnabled=value,ctx.oImageSmoothingEnabled=value,ctx.webkitImageSmoothingEnabled=value,ctx.msImageSmoothingEnabled=value}function initGame(){dirtyRects=[],aliens=[],player=new Player,particleManager=new ParticleExplosion,setupAlienFormation(),drawBottomHud()}function setupAlienFormation(){alienCount=0;for(var i=0,len=55;i<len;i++){var clipRects,gridX=i%11,gridY=Math.floor(i/11);switch(gridY){case 0:case 1:clipRects=ALIEN_BOTTOM_ROW;break;case 2:case 3:clipRects=ALIEN_MIDDLE_ROW;break;case 4:clipRects=ALIEN_TOP_ROW}aliens.push(new Enemy(clipRects,CANVAS_WIDTH/2-ALIEN_SQUAD_WIDTH/2+ALIEN_X_MARGIN/2+gridX*ALIEN_X_MARGIN,CANVAS_HEIGHT/3.25-40*gridY)),alienCount++}}function reset(){aliens=[],setupAlienFormation(),player&&player.reset()}function init(canvasElement,cntDiv){initCanvas(canvasElement,cntDiv),keyStates=[],prevKeyStates=[],resize()}function isKeyDown(key){return keyStates[key]}function wasKeyPressed(key){return!prevKeyStates[key]&&keyStates[key]}function updateAliens(dt){updateAlienLogic&&(updateAlienLogic=!1,alienDirection=-alienDirection,alienYDown=25);for(var i=aliens.length-1;i>=0;i--){var alien=aliens[i];if(!alien.alive)return aliens.splice(i,1),alien=null,alienCount--,void(alienCount<1&&(wave++,setupAlienFormation()));alien.stepDelay=(20*alienCount-10*wave)/1e3,alien.stepDelay<=.05&&(alien.stepDelay=.05),alien.update(dt),alien.doShoot&&(alien.doShoot=!1,alien.shoot())}alienYDown=0}function resolveBulletEnemyCollisions(){for(var bullets=player.bullets,i=0,len=bullets.length;i<len;i++)for(var bullet=bullets[i],j=0,alen=aliens.length;j<alen;j++){var alien=aliens[j];checkRectCollision(bullet.bounds,alien.bounds)&&(alien.alive=bullet.alive=!1,particleManager.createExplosion(alien.position.x,alien.position.y,"white",70,5,5,3,.15,50),player.score+=25)}}function resolveBulletPlayerCollisions(){for(var i=0,len=aliens.length;i<len;i++){var alien=aliens[i];if(null!==alien.bullet&&checkRectCollision(alien.bullet.bounds,player.bounds)){if(0!==player.lives){alien.bullet.alive=!1,particleManager.createExplosion(player.position.x,player.position.y,"green",100,8,8,6,.001,40),player.position.set(CANVAS_WIDTH/2,CANVAS_HEIGHT-70),player.lives--;break}hasGameStarted=!1}}}function resolveCollisions(){resolveBulletEnemyCollisions(),resolveBulletPlayerCollisions()}function updateGame(dt){player.handleInput(),prevKeyStates=keyStates.slice(),player.update(dt),updateAliens(dt),resolveCollisions()}function drawIntoCanvas(width,height,drawFunc){var canvas=document.createElement("canvas");canvas.width=width,canvas.height=height;var ctx=canvas.getContext("2d");return drawFunc(ctx),canvas}function fillText(text,x,y,color,fontSize){"undefined"!=typeof color&&(ctx.fillStyle=color),"undefined"!=typeof fontSize&&(ctx.font=fontSize+"px monospace"),ctx.fillText(text,x,y)}function fillCenteredText(text,x,y,color,fontSize){var metrics=ctx.measureText(text);fillText(text,x-metrics.width/2,y,color,fontSize)}function fillBlinkingText(text,x,y,blinkFreq,color,fontSize){~~(.5+Date.now()/blinkFreq)%2?fillCenteredText(text,x,y,color,fontSize):fillCenteredText("",x,y,color,fontSize)}function drawBottomHud(){ctx.fillStyle="#02ff12",ctx.fillRect(0,CANVAS_HEIGHT-30,CANVAS_WIDTH,2),fillText(player.lives+" x ",10,CANVAS_HEIGHT-7.5,"white",20),ctx.drawImage(spriteSheetImg,player.clipRect.x,player.clipRect.y,player.clipRect.w,player.clipRect.h,45,CANVAS_HEIGHT-23,.5*player.clipRect.w,.5*player.clipRect.h),fillText("CREDIT: ",CANVAS_WIDTH-115,CANVAS_HEIGHT-7.5),fillCenteredText("SCORE: "+player.score,CANVAS_WIDTH/2,20),fillBlinkingText("00",CANVAS_WIDTH-25,CANVAS_HEIGHT-7.5,TEXT_BLINK_FREQ)}function drawAliens(resized){for(var i=0;i<aliens.length;i++){var alien=aliens[i];alien.draw(resized)}}function drawGame(resized){player.draw(resized),drawAliens(resized),particleManager.draw(),drawBottomHud()}function drawStartScreen(){fillCenteredText("Cloud Invaders",CANVAS_WIDTH/2,CANVAS_HEIGHT/2.75,"#FFFFFF",36),fillBlinkingText("Press enter to play!",CANVAS_WIDTH/2,CANVAS_HEIGHT/2,500,"#FFFFFF",36)}function animate(){var now=window.performance.now(),dt=now-lastTime;dt>100&&(dt=100),wasKeyPressed(13)&&!hasGameStarted&&(initGame(),hasGameStarted=!0),hasGameStarted&&updateGame(dt/1e3),ctx.fillStyle="black",ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),hasGameStarted?drawGame(!1):drawStartScreen(),lastTime=now,requestAnimationFrame(animate)}function resize(){var w=window.innerWidth,h=window.innerHeight,scaleFactor=.5*Math.min(w/CANVAS_WIDTH,h/CANVAS_HEIGHT);IS_CHROME?(canvas.width=CANVAS_WIDTH*scaleFactor,canvas.height=CANVAS_HEIGHT*scaleFactor,setImageSmoothing(!1),ctx.transform(scaleFactor,0,0,scaleFactor,0,0)):(canvas.style.width=CANVAS_WIDTH*scaleFactor+"px",canvas.style.height=CANVAS_HEIGHT*scaleFactor+"px")}function onKeyDown(e){keyStates[e.keyCode]=!0}function onKeyUp(e){keyStates[e.keyCode]=!1}var window=($G.chrome,$G.window);!function(){var initializing=!1,fnTest=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(prop){function Class(){!initializing&&this.init&&this.init.apply(this,arguments)}var _super=this.prototype;initializing=!0;var prototype=new this;initializing=!1;for(var name in prop)prototype[name]="function"==typeof prop[name]&&"function"==typeof _super[name]&&fnTest.test(prop[name])?function(name,fn){return function(){var tmp=this._super;this._super=_super[name];var ret=fn.apply(this,arguments);return this._super=tmp,ret}}(name,prop[name]):prop[name];return Class.prototype=prototype,Class.prototype.constructor=Class,Class.extend=arguments.callee,Class}}(),function(){var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=requestAnimationFrame}(),function(){window.performance.now||(window.performance.now=Date.now?function(){return Date.now()}:function(){return(new Date).getTime()})}();var IS_CHROME=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),CANVAS_WIDTH=640,CANVAS_HEIGHT=640,SPRITE_SHEET_SRC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAACGUlEQVR42u3aSQ7CMBAEQIsn8P+/hiviAAK8zFIt5QbELiTHmfEYE3L9mZE9AAAAqAVwBQ8AAAD6THY5CgAAAKbfbPX3AQAAYBEEAADAuZrC6UUyfMEEAIBiAN8OePXnAQAAsLcmmKFPAQAAgHMbm+gbr3Sdo/LtcAAAANR6GywPAgBAM4D2JXAAABoBzBjA7AmlOx8AAEAzAOcDAADovTc4vQim6wUCABAYQG8QAADd4dPd2fRVYQAAANQG0B4HAABAawDnAwAA6AXgfAAAALpA2uMAAABwPgAAgPoAM9Ci/R4AAAD2dmqcEQIAIC/AiQGuAAYAAECcRS/a/cJXkUf2AAAAoBaA3iAAALrD+gIAAADY9baX/nwAAADNADwFAADo9YK0e5FMX/UFACA5QPSNEAAAAHKtCekmDAAAAADvBljtfgAAAGgMMGOrunvCy2uCAAAACFU6BwAAwF6AGQPa/XsAAADYB+B8AAAAtU+ItD4OAwAAAFVhAACaA0T7B44/BQAAANALwGMQAAAAADYO8If2+P31AgAAQN0SWbhFDwCAZlXgaO1xAAAA1FngnA8AACAeQPSNEAAAAM4CnC64AAAA4GzN4N9NSfgKEAAAAACszO26X8/X6BYAAAD0Anid8KcLAAAAAAAAAJBnwNEvAAAA9Jns1ygAAAAAAAAAAAAAAAAAAABAQ4COCENERERERERERBrnAa1sJuUVr3rsAAAAAElFTkSuQmCC",LEFT_KEY=37,RIGHT_KEY=39,SHOOT_KEY=88,TEXT_BLINK_FREQ=500,PLAYER_CLIP_RECT={x:0,y:204,w:62,h:32},ALIEN_BOTTOM_ROW=[{x:0,y:0,w:51,h:34},{x:0,y:102,w:51,h:34}],ALIEN_MIDDLE_ROW=[{x:0,y:137,w:50,h:33},{x:0,y:170,w:50,h:34}],ALIEN_TOP_ROW=[{x:0,y:68,w:50,h:32},{x:0,y:34,w:50,h:32}],ALIEN_X_MARGIN=40,ALIEN_SQUAD_WIDTH=11*ALIEN_X_MARGIN,Point2D=Class.extend({init:function(x,y){this.x="undefined"==typeof x?0:x,this.y="undefined"==typeof y?0:y},set:function(x,y){this.x=x,this.y=y}}),Rect=Class.extend({init:function(x,y,w,h){this.x="undefined"==typeof x?0:x,this.y="undefined"==typeof y?0:y,this.w="undefined"==typeof w?0:w,this.h="undefined"==typeof h?0:h},set:function(x,y,w,h){this.x=x,this.y=y,this.w=w,this.h=h}}),canvas=null,ctx=null,spriteSheetImg=null,bulletImg=null,keyStates=null,prevKeyStates=null,lastTime=0,player=null,aliens=[],particleManager=null,updateAlienLogic=!1,alienDirection=-1,alienYDown=0,alienCount=0,wave=1,hasGameStarted=!1,container=null,BaseSprite=Class.extend({init:function(img,x,y){this.img=img,this.position=new Point2D(x,y),this.scale=new Point2D(1,1),this.bounds=new Rect(x,y,this.img.width,this.img.height),this.doLogic=!0},update:function(dt){},_updateBounds:function(){this.bounds.set(this.position.x,this.position.y,~~(.5+this.img.width*this.scale.x),~~(.5+this.img.height*this.scale.y))},_drawImage:function(){ctx.drawImage(this.img,this.position.x,this.position.y)},draw:function(resized){this._updateBounds(),this._drawImage()}}),SheetSprite=BaseSprite.extend({init:function(sheetImg,clipRect,x,y){this._super(sheetImg,x,y),this.clipRect=clipRect,this.bounds.set(x,y,this.clipRect.w,this.clipRect.h)},update:function(dt){},_updateBounds:function(){var w=~~(.5+this.clipRect.w*this.scale.x),h=~~(.5+this.clipRect.h*this.scale.y);this.bounds.set(this.position.x-w/2,this.position.y-h/2,w,h)},_drawImage:function(){ctx.save(),ctx.transform(this.scale.x,0,0,this.scale.y,this.position.x,this.position.y),ctx.drawImage(this.img,this.clipRect.x,this.clipRect.y,this.clipRect.w,this.clipRect.h,~~(.5+.5*-this.clipRect.w),~~(.5+.5*-this.clipRect.h),this.clipRect.w,this.clipRect.h),ctx.restore()},draw:function(resized){this._super(resized)}}),Player=SheetSprite.extend({init:function(){this._super(spriteSheetImg,PLAYER_CLIP_RECT,CANVAS_WIDTH/2,CANVAS_HEIGHT-70),this.scale.set(.85,.85),this.lives=3,this.xVel=0,this.bullets=[],this.bulletDelayAccumulator=0,this.score=0},reset:function(){this.lives=3,this.score=0,this.position.set(CANVAS_WIDTH/2,CANVAS_HEIGHT-70)},shoot:function(){var bullet=new Bullet(this.position.x,this.position.y-this.bounds.h/2,1,1e3);this.bullets.push(bullet)},handleInput:function(){isKeyDown(LEFT_KEY)?this.xVel=-175:isKeyDown(RIGHT_KEY)?this.xVel=175:this.xVel=0,wasKeyPressed(SHOOT_KEY)&&this.bulletDelayAccumulator>.5&&(this.shoot(),this.bulletDelayAccumulator=0)},updateBullets:function(dt){for(var i=this.bullets.length-1;i>=0;i--){var bullet=this.bullets[i];bullet.alive?bullet.update(dt):(this.bullets.splice(i,1),bullet=null)}},update:function(dt){this.bulletDelayAccumulator+=dt,this.position.x+=this.xVel*dt,this.position.x=clamp(this.position.x,this.bounds.w/2,CANVAS_WIDTH-this.bounds.w/2),this.updateBullets(dt)},draw:function(resized){this._super(resized);for(var i=0,len=this.bullets.length;i<len;i++){var bullet=this.bullets[i];bullet.alive&&bullet.draw(resized)}}}),Bullet=BaseSprite.extend({init:function(x,y,direction,speed){this._super(bulletImg,x,y),this.direction=direction,this.speed=speed,this.alive=!0},update:function(dt){this.position.y-=this.speed*this.direction*dt,this.position.y<0&&(this.alive=!1)},draw:function(resized){this._super(resized)}}),Enemy=SheetSprite.extend({init:function(clipRects,x,y){this._super(spriteSheetImg,clipRects[0],x,y),this.clipRects=clipRects,this.scale.set(.5,.5),this.alive=!0,this.onFirstState=!0,this.stepDelay=1,this.stepAccumulator=0,this.doShoot-!1,this.bullet=null},toggleFrame:function(){this.onFirstState=!this.onFirstState,this.clipRect=this.onFirstState?this.clipRects[0]:this.clipRects[1]},shoot:function(){this.bullet=new Bullet(this.position.x,this.position.y+this.bounds.w/2,(-1),500)},update:function(dt){if(this.stepAccumulator+=dt,this.stepAccumulator>=this.stepDelay){this.position.x<this.bounds.w/2+20&&alienDirection<0&&(updateAlienLogic=!0),1===alienDirection&&this.position.x>CANVAS_WIDTH-this.bounds.w/2-20&&(updateAlienLogic=!0),this.position.y>CANVAS_WIDTH-50&&reset();Math.floor(Math.random()*(this.stepDelay+1));getRandomArbitrary(0,1e3)<=5*(this.stepDelay+1)&&(this.doShoot=!0),this.position.x+=10*alienDirection,this.toggleFrame(),this.stepAccumulator=0}this.position.y+=alienYDown,null!==this.bullet&&this.bullet.alive?this.bullet.update(dt):this.bullet=null},draw:function(resized){this._super(resized),null!==this.bullet&&this.bullet.alive&&this.bullet.draw(resized)}}),ParticleExplosion=Class.extend({init:function(){this.particlePool=[],this.particles=[]},draw:function(){for(var i=this.particles.length-1;i>=0;i--){var particle=this.particles[i];particle.moves++,particle.x+=particle.xunits,particle.y+=particle.yunits+particle.gravity*particle.moves,particle.life--,particle.life<=0?this.particlePool.length<100?this.particlePool.push(this.particles.splice(i,1)):this.particles.splice(i,1):(ctx.globalAlpha=particle.life/particle.maxLife,ctx.fillStyle=particle.color,ctx.fillRect(particle.x,particle.y,particle.width,particle.height),ctx.globalAlpha=1)}},createExplosion:function(x,y,color,number,width,height,spd,grav,lif){for(var i=0;i<number;i++){var angle=Math.floor(360*Math.random()),speed=Math.floor(Math.random()*spd/2)+spd,life=Math.floor(Math.random()*lif)+lif/2,radians=angle*Math.PI/180,xunits=Math.cos(radians)*speed,yunits=Math.sin(radians)*speed;if(this.particlePool.length>0){var tempParticle=this.particlePool.pop();tempParticle.x=x,tempParticle.y=y,tempParticle.xunits=xunits,tempParticle.yunits=yunits,tempParticle.life=life,tempParticle.color=color,tempParticle.width=width,tempParticle.height=height,tempParticle.gravity=grav,tempParticle.moves=0,tempParticle.alpha=1,tempParticle.maxLife=life,this.particles.push(tempParticle)}else this.particles.push({x:x,y:y,xunits:xunits,yunits:yunits,life:life,color:color,width:width,height:height,gravity:grav,moves:0,alpha:1,maxLife:life})}}}),resetAll=function(){reset(),ctx.clearRect(0,0,canvas.width,canvas.height),window.removeEventListener("resize",resize),document.removeEventListener("keydown",onKeyDown),document.removeEventListener("keyup",onKeyUp)};return{init:init,animate:animate,resetAll:resetAll}}),global.true=exports}({},function(){return this}());