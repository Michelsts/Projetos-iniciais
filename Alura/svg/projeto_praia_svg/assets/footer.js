class Footer {
    constructor() {
        this.filtroTurbulencia = document.querySelector('#filtro-turbulencia');
    }

    efeitoOnda() {
        gsap.to(this.filtroTurbulencia, 20, {
            attr: {
                baseFrequency: 0.03,
            },
            repeat: -1,
            yoyo: true,
        });
    }
}

export { Footer };
