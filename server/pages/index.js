"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3877);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1759);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_templates_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3257);
/* harmony import */ var _src_components_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7621);
/* harmony import */ var _src_components_templates_footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1257);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2248);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_10__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_6__, swiper__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function Home({ coin , team , service  }) {
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(coin);
    const [teammate, setTeammate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(team);
    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(service);
    const [swiperRef, setSwiperRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const slideTo = (index)=>{
        swiperRef.slideTo(index - 1, 0);
    };
    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_11___default().init({
            once: true,
            offset: 50,
            duration: 1000
        });
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        if (window.innerWidth <= 1024) {
            setDomLoaded(true);
        }
        console.log(window.innerWidth);
        const preload = ()=>{
            let manager = new three__WEBPACK_IMPORTED_MODULE_16__.LoadingManager();
            manager.onLoad = function() {
                const environment = new Environment(typo, particle);
            };
            var typo = null;
            const loader = new three__WEBPACK_IMPORTED_MODULE_16__.FontLoader(manager);
            // loader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json', function ( font ) { 
            //   typo = font; 
            // });
            loader.load("data/BigSquareDots_Regular.json", function(font) {
                typo = font;
            });
            // loader.load('./data/font_zsd4dr.json', function ( font ) { 
            //   typo = font; 
            // });
            const particle = new three__WEBPACK_IMPORTED_MODULE_16__.TextureLoader().load("https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png");
        // const particle = new THREE.TextureLoader().load( 'data/particle_a64uzf.png');
        };
        // const interval = setInterval(preload, 1000);
        // return () => clearInterval(interval);
        if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) preload();
        else document.addEventListener("DOMContentLoaded", preload);
        class Environment {
            constructor(font, particle){
                this.font = font;
                this.particle = particle;
                this.container = document.querySelector("#magic");
                this.scene = new three__WEBPACK_IMPORTED_MODULE_16__.Scene();
                this.createCamera();
                this.createRenderer();
                this.setup();
                this.bindEvents();
            }
            bindEvents() {
                window.addEventListener("resize", this.onWindowResize.bind(this));
            }
            setup() {
                this.createParticles = new CreateParticles(this.scene, this.font, this.particle, this.camera, this.renderer);
            }
            render() {
                this.createParticles.render();
                this.renderer.render(this.scene, this.camera);
            }
            createCamera() {
                this.camera = new three__WEBPACK_IMPORTED_MODULE_16__.PerspectiveCamera(65, this.container.clientWidth / this.container.clientHeight, 1, 10000);
                this.camera.position.set(0, 0, 100);
            }
            createRenderer() {
                this.renderer = new three__WEBPACK_IMPORTED_MODULE_16__.WebGLRenderer({
                    alpha: true
                });
                this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
                this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
                this.renderer.setClearColor(0x000000, 0);
                this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                this.renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_16__.sRGBEncoding;
                this.container.appendChild(this.renderer.domElement);
                this.renderer.setAnimationLoop(()=>{
                    this.render();
                });
            }
            onWindowResize() {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
        }
        class CreateParticles {
            constructor(scene, font, particleImg, camera, renderer){
                this.scene = scene;
                this.font = font;
                this.particleImg = particleImg;
                this.camera = camera;
                this.renderer = renderer;
                this.raycaster = new three__WEBPACK_IMPORTED_MODULE_16__.Raycaster();
                this.mouse = new three__WEBPACK_IMPORTED_MODULE_16__.Vector2(-200, 200);
                this.colorChange = new three__WEBPACK_IMPORTED_MODULE_16__.Color();
                this.buttom = false;
                this.small_text = 0;
                if (window.innerWidth <= 480) {
                    this.data = {
                        // text: 'UBB Digital Asset Trust',
                        text: " PROTECT,",
                        text2: "MANAGE,",
                        text3: "AND",
                        text4: "PRESERVE",
                        amount: 10,
                        particleSize: 1,
                        particleColor: 0xffffff,
                        textSize: 16,
                        textSize2: 16,
                        textSize3: 20,
                        textSize4: 20,
                        area: 250,
                        ease: .05
                    };
                } else {
                    this.data = {
                        // text: 'UBB Digital Asset Trust',
                        text: " PROTECT, MANAGE",
                        text2: "AND PRESERVE",
                        text3: "",
                        text4: "",
                        amount: 30,
                        particleSize: 1,
                        particleColor: 0xffffff,
                        textSize: 8,
                        textSize2: 14,
                        area: 250,
                        ease: .05
                    };
                }
                this.setup();
                this.bindEvents();
            }
            setup() {
                const geometry = new three__WEBPACK_IMPORTED_MODULE_16__.PlaneGeometry(this.visibleWidthAtZDepth(100, this.camera), this.visibleHeightAtZDepth(100, this.camera));
                const material = new three__WEBPACK_IMPORTED_MODULE_16__.MeshBasicMaterial({
                    color: 0x06AF6E,
                    transparent: true
                });
                this.planeArea = new three__WEBPACK_IMPORTED_MODULE_16__.Mesh(geometry, material);
                this.planeArea.visible = false;
                this.createText();
            }
            bindEvents() {
                document.addEventListener("mousedown", this.onMouseDown.bind(this));
                document.addEventListener("mousemove", this.onMouseMove.bind(this));
                document.addEventListener("mouseup", this.onMouseUp.bind(this));
            }
            onMouseDown() {
                this.mouse.x = event.clientX / window.innerWidth * 2 - 1;
                this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                const vector = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(this.mouse.x, this.mouse.y, 0.5);
                vector.unproject(this.camera);
                const dir = vector.sub(this.camera.position).normalize();
                const distance = -this.camera.position.z / dir.z;
                this.currenPosition = this.camera.position.clone().add(dir.multiplyScalar(distance));
                const pos = this.particles.geometry.attributes.position;
                this.buttom = true;
                this.data.ease = .01;
            }
            onMouseUp() {
                this.buttom = false;
                this.data.ease = .05;
            }
            onMouseMove() {
                this.mouse.x = event.clientX / window.innerWidth * 2 - 1;
                this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            }
            render(level) {
                const time = .001 * performance.now() % 12 / 12;
                const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const intersects = this.raycaster.intersectObject(this.planeArea);
                if (intersects.length > 0) {
                    const pos = this.particles.geometry.attributes.position;
                    const copy = this.geometryCopy.attributes.position;
                    const coulors = this.particles.geometry.attributes.customColor;
                    const size = this.particles.geometry.attributes.size;
                    const mx = intersects[0].point.x;
                    const my = intersects[0].point.y;
                    const mz = intersects[0].point.z;
                    for(var i = 0, l = pos.count; i < l; i++){
                        const initX = copy.getX(i);
                        const initY = copy.getY(i);
                        const initZ = copy.getZ(i);
                        let px = pos.getX(i);
                        let py = pos.getY(i);
                        let pz = pos.getZ(i);
                        this.colorChange.setHSL(.5, 1, 1);
                        coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                        coulors.needsUpdate = true;
                        size.array[i] = this.data.particleSize;
                        size.needsUpdate = true;
                        let dx = mx - px;
                        let dy = my - py;
                        const dz = mz - pz;
                        const mouseDistance = this.distance(mx, my, px, py);
                        let d = (dx = mx - px) * dx + (dy = my - py) * dy;
                        const f = -this.data.area / d;
                        if (this.buttom) {
                            const t = Math.atan2(dy, dx);
                            px -= f * Math.cos(t);
                            py -= f * Math.sin(t);
                            this.colorChange.setHSL(.5 + zigzagTime, 1.0, .5);
                            coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                            coulors.needsUpdate = true;
                            if (px > initX + 70 || px < initX - 70 || py > initY + 70 || py < initY - 70) {
                                this.colorChange.setHSL(.15, 1.0, .5);
                                coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                                coulors.needsUpdate = true;
                            }
                        } else {
                            if (mouseDistance < this.data.area) {
                                if (i % 5 == 0) {
                                    const t1 = Math.atan2(dy, dx);
                                    px -= .03 * Math.cos(t1);
                                    py -= .03 * Math.sin(t1);
                                    this.colorChange.setHSL(.15, 1.0, .5);
                                    coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                                    coulors.needsUpdate = true;
                                    size.array[i] = this.data.particleSize / 1.2;
                                    size.needsUpdate = true;
                                } else {
                                    const t2 = Math.atan2(dy, dx);
                                    px += f * Math.cos(t2);
                                    py += f * Math.sin(t2);
                                    pos.setXYZ(i, px, py, pz);
                                    pos.needsUpdate = true;
                                    size.array[i] = this.data.particleSize * 1.3;
                                    size.needsUpdate = true;
                                }
                                if (px > initX + 10 || px < initX - 10 || py > initY + 10 || py < initY - 10) {
                                    this.colorChange.setHSL(.15, 1.0, .5);
                                    coulors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
                                    coulors.needsUpdate = true;
                                    size.array[i] = this.data.particleSize / 1.8;
                                    size.needsUpdate = true;
                                }
                            }
                        }
                        px += (initX - px) * this.data.ease;
                        py += (initY - py) * this.data.ease;
                        pz += (initZ - pz) * this.data.ease;
                        pos.setXYZ(i, px, py, pz);
                        pos.needsUpdate = true;
                    }
                }
                setLoading(true);
            }
            createText() {
                let thePoints = [];
                let shapes = this.font.generateShapes(this.data.text, this.data.textSize);
                // let s1 = this.font.generateShapes( this.data.text , this.data.textSize);
                let s2 = this.font.generateShapes(this.data.text2, this.data.textSize2);
                // if(window.innerWidth <= 480){
                let s3 = this.font.generateShapes(this.data.text3, this.data.textSize3);
                let s4 = this.font.generateShapes(this.data.text4, this.data.textSize4);
                //}
                // console.log("shapes: " + shapes[0]);
                // let shapes = s1 + s2;
                let geometry = new three__WEBPACK_IMPORTED_MODULE_16__.ShapeGeometry(shapes);
                // let geometry2 = new THREE.ShapeGeometry( s2 );
                geometry.computeBoundingBox();
                // geometry2.computeBoundingBox();
                const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
                const yMid = (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85;
                geometry.center();
                let holeShapes = [];
                for(let q = 0; q < shapes.length; q++){
                    let shape = shapes[q];
                    if (shape.holes && shape.holes.length > 0) {
                        for(let j = 0; j < shape.holes.length; j++){
                            let hole = shape.holes[j];
                            holeShapes.push(hole);
                        }
                    }
                }
                shapes.push.apply(shapes, holeShapes);
                let colors = [];
                let sizes = [];
                for(let x = 0; x < shapes.length; x++){
                    let shape1 = shapes[x];
                    const amountPoints = shape1.type == "Path" ? this.data.amount / 2 : this.data.amount;
                    let points = shape1.getSpacedPoints(amountPoints);
                    points.forEach((element, z)=>{
                        const a = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(element.x - 6, element.y, 0);
                        thePoints.push(a);
                        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                        sizes.push(1);
                    });
                }
                for(let y = 0; y < s2.length; y++){
                    let shape2 = s2[y];
                    const amountPoints1 = shape2.type == "Path" ? this.data.amount / 2 : this.data.amount;
                    let points1 = shape2.getSpacedPoints(amountPoints1);
                    points1.forEach((element, z)=>{
                        if (window.innerWidth <= 480) {
                            var a = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(element.x, element.y - 22, 0);
                        } else {
                            var a = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(element.x - 26, element.y - 20, 0);
                        }
                        thePoints.push(a);
                        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                        sizes.push(1);
                    });
                }
                if (window.innerWidth <= 480) {
                    for(let y1 = 0; y1 < s3.length; y1++){
                        let shape3 = s3[y1];
                        const amountPoints2 = shape3.type == "Path" ? this.data.amount / 2 : this.data.amount;
                        let points2 = shape3.getSpacedPoints(amountPoints2);
                        points2.forEach((element, z)=>{
                            var a = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(element.x + 20, element.y - 46, 0);
                            thePoints.push(a);
                            colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                            sizes.push(1);
                        });
                    }
                    for(let y2 = 0; y2 < s4.length; y2++){
                        let shape4 = s4[y2];
                        const amountPoints3 = shape4.type == "Path" ? this.data.amount / 2 : this.data.amount;
                        let points3 = shape4.getSpacedPoints(amountPoints3);
                        points3.forEach((element, z)=>{
                            var a = new three__WEBPACK_IMPORTED_MODULE_16__.Vector3(element.x - 24, element.y - 70, 0);
                            thePoints.push(a);
                            colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
                            sizes.push(1);
                        });
                    }
                }
                let geoParticles = new three__WEBPACK_IMPORTED_MODULE_16__.BufferGeometry().setFromPoints(thePoints);
                geoParticles.translate(xMid, yMid, 0);
                geoParticles.setAttribute("customColor", new three__WEBPACK_IMPORTED_MODULE_16__.Float32BufferAttribute(colors, 3));
                geoParticles.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_16__.Float32BufferAttribute(sizes, 1));
                const material = new three__WEBPACK_IMPORTED_MODULE_16__.ShaderMaterial({
                    uniforms: {
                        color: {
                            value: new three__WEBPACK_IMPORTED_MODULE_16__.Color(0xffffff)
                        },
                        pointTexture: {
                            value: this.particleImg
                        }
                    },
                    vertexShader: document.getElementById("vertexshader").textContent,
                    fragmentShader: document.getElementById("fragmentshader").textContent,
                    blending: three__WEBPACK_IMPORTED_MODULE_16__.AdditiveBlending,
                    depthTest: false,
                    transparent: false
                });
                this.particles = new three__WEBPACK_IMPORTED_MODULE_16__.Points(geoParticles, material);
                this.scene.add(this.particles);
                this.geometryCopy = new three__WEBPACK_IMPORTED_MODULE_16__.BufferGeometry();
                this.geometryCopy.copy(this.particles.geometry);
            }
            visibleHeightAtZDepth(depth, camera) {
                const cameraOffset = camera.position.z;
                if (depth < cameraOffset) depth -= cameraOffset;
                else depth += cameraOffset;
                const vFOV = camera.fov * Math.PI / 180;
                return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
            }
            visibleWidthAtZDepth(depth, camera) {
                const height = this.visibleHeightAtZDepth(depth, camera);
                return height * camera.aspect;
            }
            distance(x1, y1, x2, y2) {
                return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
            }
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "UBB Amanah (Labuan) Limited"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/ubb-labuan-limited.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "copyright",
                        content: "UBB Amanah (Labuan) Limited"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        "http-equiv": "Content-Type",
                        content: "text/html; charset=UTF-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        "http-equiv": "Content-Language",
                        content: "en"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "theme-color",
                        content: "black"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "UBB Amanah (Labuan) Limited"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "https://ubb-fe.vercel.app/AppIcon/ApIcon192.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:width",
                        content: "500"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:height",
                        content: "500"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://ubb-fe.vercel.app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:url",
                        content: "https://ubb-fe.vercel.app/AppIcon/ApIcon192.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `loader-wrapper ${loading ? "hidden" : ""}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "ring",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: "/UBB-Labuan-limited.png",
                            priority: true,
                            className: "header_logo mx-auto mt-[45px]",
                            width: 80,
                            height: 80,
                            alt: "logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: ""
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_templates_menu__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative overflow-hidden home_bg_cover",
                        id: "home",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                id: "bgVideo",
                                preload: "true",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                className: "w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                    src: "/Landing/video/video1.mp4",
                                    type: "video/mp4"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rhs_label",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "WELCOME TO UBB"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                        type: "x-shader/x-vertex",
                        id: "vertexshader",
                        children: `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {

    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = size * ( 300.0 / -mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;

  }
  `
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {
                        type: "x-shader/x-fragment",
                        id: "fragmentshader",
                        children: `
 uniform vec3 color;
 uniform sampler2D pointTexture;

 varying vec3 vColor;

 void main() {

   gl_FragColor = vec4( color * vColor, 1.0 );
   gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

 }
 `
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${scrollY >= 1600 ? "hidden" : ""} playground flex flex-col items-center justify-center fixed_bg`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                id: "magic"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-md sm:text-xl lg:text-2xl mb-8 text-white max-w-full sm:max-w-[80vw] md:max-w-[800px] mx-auto leading-6 uppercase px-6 magic_text text-center",
                                "data-aos": "fade-up",
                                children: "the value of the digital assets for the legacy of donor with sustainable income."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative protect_bg_cover overflow-hidden pb-0",
                        id: "why",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-full overflow-hidden b-figxed z-10 relative pt-12 pb-28 sm:py-16 md:py-24",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center items-center h-full mx-auto lg:container",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center text-white px-6 md:px-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-4xl lg:text-6xl mt-0 text-[#00c9ff] mb-6 uppercase leading-8",
                                                    "data-aos": "fade-up",
                                                    children: "Ubb Digital Assets Trust"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-2xl lg:text-3xl mb-6 uppercase leading-6",
                                                    "data-aos": "fade-up",
                                                    children: "Expect nothing but the best when it comes to your finances"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-md lg:text-lg mb-8 text-white max-w-[1000px] mx-auto px-0 sm:px-6",
                                                    "data-aos": "fade-up",
                                                    children: "We manage your digital assets on behalf for the utmost benefit for you. By facilitating a wide range of digital assets with innovative structures that incorporate trust solutions."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: "#",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "button",
                                                        "data-aos": "fade-up",
                                                        className: "gradient_btn px-6 py-3 mb-0 mt-6 text-white text-sm leading-tight uppercase focus:outline-none transition duration-150 ease-in-out",
                                                        children: "START EXPLORING"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rhs_label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "WE ARE THE BEST"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/Landing/diagonal_bg.png",
                                className: "w-full absolute top-0 left-0 right-0 h-[600px] lg:h-[700px] object-bottom object-cover",
                                width: 1200,
                                height: 600,
                                alt: "background image"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mx-auto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative h-[800px] lg:h-[1000px] xl:h-[1200px] ",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rhs_label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "WE INVEST WITH YOU"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/Landing/bg1.png",
                                className: "w-full absolute",
                                width: 1200,
                                height: 600,
                                alt: "background image"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative overflow-hidden bg-none why_bg",
                        id: "service",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                id: "protect_video",
                                preload: "true",
                                className: "bg_3_polygon",
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                    src: "/Landing/video/video2.mp4",
                                    type: "video/mp4"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-full overflow-hidden bg-fixed z-10 relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "h-full relative pb-14",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rhs_label",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "WE INVEST WITH YOU"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center text-white px-6 md:px-12 md:pt-20 lg:pt-32 xl:pt-[22vh]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-5xl lg:text-6xl mb-6 uppercase blue-stroke",
                                                        "data-aos": "fade-up",
                                                        children: "About"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-xl lg:text-3xl mb-8 text-white max-w-[1100px] mx-auto px-6 font-bold",
                                                        "data-aos": "fade-up",
                                                        children: "WE ARE ON A MISSION TO MANAGE AND PRESERVE THE VALUE OF THE DIGITAL ASSETS FOR THE BENEFITS OF DONOR WITH SUSTAINABLE RETURN."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "text-md lg:text-xl mb-6 text-white",
                                                        "data-aos": "fade-up",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-[#e72864] text-2xl",
                                                                children: "["
                                                            }),
                                                            " Banks and trusts as custodians are the most trusted ones. ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-[#e72864] text-2xl",
                                                                children: "]"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: "/UBB-Labuan-limited.png",
                                                        "data-aos": "fade-left",
                                                        className: "mx-auto py-4 block",
                                                        width: 250,
                                                        height: 200,
                                                        alt: "UBB Amanah (Labuan) Limited Logo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-xl lg:text-2xl text-[#00c9ff] mt-6 mb-2",
                                                        "data-aos": "fade-up",
                                                        children: "TRUSTEE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md lg:text-lg mb-8 text-white max-w-[450px] mx-auto px-6",
                                                        "data-aos": "fade-down",
                                                        children: "UBB Amanah (Labuan) Limited Licensed Labuan managed trust company"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "normal_hr max-w-[600px] mx-auto",
                                        "data-aos": "fade-up"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative pt-20 pb-14",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rhs_label",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "WE ARE TRUSTED"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center text-white px-6 md:px-12",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-5xl lg:text-6xl mb-6 blue-stroke",
                                                        "data-aos": "fade-up",
                                                        children: "Why Choose Us?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md lg:text-lg text-white text-center max-w-[950px] mx-auto mb-10",
                                                        "data-aos": "fade-up",
                                                        children: "Trusted since 1988 and being one of the oldest Trust companies in Malaysia, UBB Amanah Berhad boast in having the best and most ethical minds in the trust industry. Having more than 3 decades of experience in providing trust solutions to individuals and corporations has made UBB a desired trust company for all trust structures, especially catering to middle class families and high-net-worth individuals."
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md lg:text-lg text-white text-center max-w-[950px] mx-auto mb-10",
                                                        "data-aos": "fade-up",
                                                        children: "While UBB also provides services to corporations and non-profit organizations, UBB's focus is on individuals who intend to establish trusts towards creation of a legacy and wealth preservation."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "normal_hr max-w-[600px] mx-auto",
                                        "data-aos": "fade-up"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative pt-20 pb-14",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rhs_label",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "WE ARE EXPERIENCED"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center text-white px-6 md:px-12",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "text-4xl lg:text-5xl mb-6 uppercase blue-stroke",
                                                        "data-aos": "fade-up",
                                                        children: "Why UBB IB?"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md lg:text-lg text-white text-center max-w-[950px] mx-auto mb-10",
                                                        "data-aos": "fade-up",
                                                        children: "UBB Investment Bank Limited was incorporated in 2021, as a wholly owned subsidiary of UBB Amanah Berhad, a major private trustee in Malaysia providing trust services since 1988. Our clients range from individuals to large organisations, with their demanding needs, we strive to consistently innovate and create bespoke solutions for our clients and have always been able to meet their high standards and expectations."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: "normal_hr max-w-[600px] mx-auto",
                                        "data-aos": "fade-up"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "service_bg pt-32 pb-20 px-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rhs_label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "OUR SOLUTIONS"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "text-center text-white px-6 md:px-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-4xl lg:text-5xl mb-6 sm:mb-24 blue-stroke font-normal",
                                                "data-aos": "fade-up",
                                                children: "Our Services"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between mb-8 items-center block sm:hidden",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "swiper-button-prev-unique",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-icon29"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-white text-center",
                                                        children: "Please swipe Left / Right"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        class: "swiper-button-next-unique",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-icon30"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "px-4 relative overflow-hidden bg-fixed w-full h-full max-w-full",
                                        "data-aos": "fade-up",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                            effect: "coverflow",
                                            grabCursor: true,
                                            centeredSlides: true,
                                            navigation: true,
                                            breakpoints: {
                                                0: {
                                                    slidesPerView: 2,
                                                    navigation: {
                                                        nextEl: ".swiper-button-next-unique",
                                                        prevEl: ".swiper-button-prev-unique"
                                                    }
                                                },
                                                575: {
                                                    slidesPerView: 2,
                                                    navigation: {
                                                        nextEl: ".swiper-button-next-unique",
                                                        prevEl: ".swiper-button-prev-unique"
                                                    }
                                                },
                                                768: {
                                                    slidesPerView: 3,
                                                    navigation: {
                                                        nextEl: ".swiper-button-next-unique",
                                                        prevEl: ".swiper-button-prev-unique"
                                                    }
                                                },
                                                1024: {
                                                    slidesPerView: 5
                                                },
                                                1600: {
                                                    slidesPerView: 6
                                                },
                                                1920: {
                                                    slidesPerView: 7
                                                }
                                            },
                                            initialSlide: 1,
                                            coverflowEffect: {
                                                rotate: 30,
                                                stretch: 0,
                                                depth: 100,
                                                modifier: 1,
                                                slideShadows: true
                                            },
                                            pagination: true,
                                            modules: [
                                                swiper__WEBPACK_IMPORTED_MODULE_10__.EffectCoverflow,
                                                swiper__WEBPACK_IMPORTED_MODULE_10__.Pagination,
                                                swiper__WEBPACK_IMPORTED_MODULE_10__.Navigation
                                            ],
                                            className: "service_swiper px-16 ",
                                            children: services?.map((s)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: s.thumb_src,
                                                            alt: s.name,
                                                            width: 200,
                                                            height: 300,
                                                            className: "w-full -z-10 duration-300"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            src: s.thumb_src_dark,
                                                            alt: s.name,
                                                            width: 200,
                                                            height: 300,
                                                            className: "w-full -z-10 duration-300 dark_img"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "absolute inset-x-0 top-0 bottom-0 my-auto h-fit",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: `${s.icon} text-6xl sm:text-7xl text-white mb-3 block`
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-[13px] sm:text-[16px] md:text-[18px] xl:text-[22px] text-center text-white font-bold font-[Montserrat-Bold] uppercase mx-auto w-fit px-4",
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: s.name
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    src: "/Landing/seperator2.png",
                                                                    alt: "seperator",
                                                                    width: 200,
                                                                    height: 8,
                                                                    className: "mx-auto my-3 block duration-300 w-full"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-[11px] sm:text-[12px] xl:text-[15px] text-center text-white px-4",
                                                                    children: s.description
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, s.id);
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative overflow-hidden accepted_bg_cover py-24",
                        id: "team",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "rhs_label",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "span_xl",
                                    children: "LET US HELP YOU WITH YOUR ASSETS"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "normal_hr mt-0 mb-20 max-w-[600px] mx-auto",
                                "data-aos": "fade-up"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-full overflow-hidden bg-fixed",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center items-center h-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center text-white px-6 md:px-12",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                    className: "text-4xl lg:text-5xl mb-4 blue-stroke font-normal",
                                                    "data-aos": "fade-up",
                                                    children: [
                                                        "Accepted ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        "Digital Assets"
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-md lg:text-xl mb-0 text-white mx-auto px-6 font-bold",
                                                    "data-aos": "fade-up",
                                                    children: "6 crypto currency that accepted by UBB"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-full max-w-[800px] px-6 sm:px-28 py-8 mx-auto overflow-hidden bg-fixed relative crypto_bg",
                                        "data-aos": "fade-up",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                            spaceBetween: 10,
                                            slidesPerView: 5,
                                            loop: true,
                                            allowTouchMove: false,
                                            centeredSlides: true,
                                            onSlideChange: ()=>console.log("slide change"),
                                            onSwiper: setSwiperRef,
                                            children: post?.map((slide)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                    className: "py-16",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: slide.thumb_src,
                                                        alt: slide.title,
                                                        width: 90,
                                                        height: 90,
                                                        className: "coin_img duration-300"
                                                    })
                                                }, slide.id);
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "lg:container flex justify-between flex-wrap mx-auto mb-12 lg:mb-24 px-6 sm:px-12",
                                        children: [
                                            post?.map((slide2)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    "data-aos": "fade-up",
                                                    className: "w-full sm:w-1/2 border-b-[1px] border-[#00e7ff]/[.5] max-w-full sm:max-w-[46%] text-white hover:cursor-pointer hover:text-[#00e7ff]",
                                                    onClick: ()=>slideTo(slide2.id + 5),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "px-8 lg:px-14 py-4 sm:py-8 flex gap-x-0 sm:gap-x-8 lg:gap-x-12 items-center hover:text-[#00e7ff]",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: `text-2xl lg:text-3xl ${slide2.icon} min-w-[40px]`
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-xl lg:text-2xl",
                                                                children: slide2.title
                                                            })
                                                        ]
                                                    })
                                                }, `list-${slide2.id}`);
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-aos": "fade-up",
                                                className: "w-full sm:w-1/2 border-b-[1px] border-[#00e7ff]/[.5] max-w-full sm:max-w-[46%]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "px-8 lg:px-14 py-4 sm:py-8 flex px-8 gap-x-0 sm:gap-x-8 lg:gap-x-12 items-center",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: `text-white text-2xl lg:text-3xl icon-icon7 min-w-[40px]`
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "text-white text-xl lg:text-2xl",
                                                            children: "OTHER CRYPTO CURRENCY"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative overflow-hidden bg-black",
                        id: "contact",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative px-6 sm:px-14 pt-24",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rhs_label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "span_xl",
                                            children: "TAILORMADE ASSET SOLUTIONS"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-center items-center h-full",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-center text-white px-6 md:px-12",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    className: "text-4xl lg:text-5xl mb-4 blue-stroke font-normal",
                                                    "data-aos": "fade-up",
                                                    children: "Meet Our Team"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-md lg:text-xl mb-0 text-white mx-auto px-6 font-bold",
                                                    "data-aos": "fade-up",
                                                    children: "People that be smart about your Digital Assets"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex justify-between mt-8 items-center block sm:hidden",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "swiper-button-prev-team",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-icon29"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-white text-center",
                                                            children: "Please swipe Left / Right"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "swiper-button-next-team",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "icon-icon30"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full h-full lg:px-6 lg:container mx-auto pb-16 bg-fixed relative",
                                        "data-aos": "fade-up",
                                        children: [
                                            domLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {
                                                spaceBetween: 10,
                                                loop: true,
                                                allowTouchMove: true,
                                                centeredSlides: true,
                                                navigation: true,
                                                pagination: true,
                                                onSlideChange: ()=>console.log("slide change"),
                                                // onSwiper={setSwiperRef}
                                                breakpoints: {
                                                    0: {
                                                        slidesPerView: 1,
                                                        navigation: {
                                                            nextEl: ".swiper-button-next-team",
                                                            prevEl: ".swiper-button-prev-team"
                                                        }
                                                    },
                                                    640: {
                                                        slidesPerView: 2,
                                                        navigation: {
                                                            nextEl: ".swiper-button-next-team",
                                                            prevEl: ".swiper-button-prev-team"
                                                        }
                                                    },
                                                    768: {
                                                        slidesPerView: 3
                                                    },
                                                    1024: {
                                                        slidesPerView: 5
                                                    }
                                                },
                                                modules: [
                                                    swiper__WEBPACK_IMPORTED_MODULE_10__.Pagination,
                                                    swiper__WEBPACK_IMPORTED_MODULE_10__.Navigation
                                                ],
                                                children: teammate?.map((t)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {
                                                        className: "px-4 py-16 text-center mx-auto",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: t.thumb_src,
                                                                alt: t.name,
                                                                width: 90,
                                                                height: 90,
                                                                className: "mx-auto block duration-300"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-center text-white text-md mt-2",
                                                                children: t.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-[#2ebac6] text-[14px] my-3",
                                                                children: t.position
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-[14px] text-white",
                                                                children: t.description
                                                            })
                                                        ]
                                                    }, t.id);
                                                })
                                            }),
                                            !domLoaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "grid grid-cols-5 gap-4 py-16 ",
                                                children: teammate?.map((t)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "px-4 pb-10 text-center mx-auto",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: t.thumb_src,
                                                                alt: t.name,
                                                                width: 90,
                                                                height: 90,
                                                                className: "mx-auto block duration-300"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-center text-white text-md mt-2",
                                                                children: t.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-[#2ebac6] text-[14px] my-3",
                                                                children: t.position
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-[14px] text-white",
                                                                children: t.description
                                                            })
                                                        ]
                                                    }, t.id);
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "diagonal_hr"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-full overflow-hidden bg-fixed pt-32 pb-12 sm:pb-24 px-6 sm:px-14 relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rhs_label",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "span_lg",
                                            children: "DROP US A LINE OR TWO"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between flex-wrap md:flex-nowrap h-full lg:container mx-auto gap-x-24 ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-white text-left md:mb-0 mb-20 md:px-12 md:px-0 w-full md:w-2/5 md:max-w-[440px]",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                                        className: "text-5xl sm:text-6xl mb-4 blue-stroke",
                                                        "data-aos": "fade-up",
                                                        children: [
                                                            "Let's ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                            "Connect"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: 'text-xl sm:text-2xl lg:text-3xl mb-4 text-white font-["Montserrat-Bold"]',
                                                        "data-aos": "fade-up",
                                                        children: "ASSET PROTECTION TRUSTS FOR DIGITAL ASSETS"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md sm:text-lg text-white",
                                                        "data-aos": "fade-up",
                                                        children: "We can help you to anticipate what's best for your digital assets"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                        className: "gradient_hr thin_hr mt-8 mb-8 mx-auto",
                                                        "data-aos": "fade-up"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: 'text-xl mb-4 text-white font-["Montserrat-Bold"]',
                                                        "data-aos": "fade-up",
                                                        children: "STAY UP TO DATE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md text-white",
                                                        "data-aos": "fade-up",
                                                        children: "Join our newsletter to get the latest updates on global Investsments, Market Trends, and Metaverse news."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                        className: "mt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "relative mb-8",
                                                                "data-aos": "fade-up",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "email",
                                                                        id: "sub_email",
                                                                        className: "text-sm appearance-none peer",
                                                                        placeholder: " "
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                        htmlFor: "sub_email",
                                                                        className: "text-sm text-white duration-300 transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-[#e72864] peer-focus:dark:text-[#e72864] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4",
                                                                        children: "* Email"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                href: "#",
                                                                className: "block mx-auto md:mx-0",
                                                                "data-aos": "fade-up",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                    type: "button",
                                                                    className: "gradient_btn px-6 py-3 mb-0 mt-3 text-white text-sm leading-tight uppercase focus:outline-none transition duration-150 ease-in-out",
                                                                    children: "SIGN UP"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-full md:w-3/5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_form__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_templates_footer__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
        ]
    });
}
async function getServerSideProps() {
    const response = await fetch("https://ubb-fe-alpha.vercel.app/data/crypto.json");
    const response_team = await fetch("https://ubb-fe-alpha.vercel.app/data/teams.json");
    const response_service = await fetch("https://ubb-fe-alpha.vercel.app/data/services.json");
    // const response = await fetch('http://localhost:3000/data/crypto.json');
    // const response_team = await fetch('http://localhost:3000/data/teams.json');
    // const response_service = await fetch('http://localhost:3000/data/services.json');
    const data = await response.json();
    const data2 = await response_team.json();
    const data3 = await response_service.json();
    //console.log('data: ' + response);
    return {
        props: {
            coin: data.coins,
            team: data2.teams,
            service: data3.services
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("three");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,702,255], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();