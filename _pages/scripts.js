function convertFrom(unit) {
    const eV = document.getElementById('eV');
    const meV = document.getElementById('meV');
    const nm = document.getElementById('nm');
    const um = document.getElementById('um');
    const cm1 = document.getElementById('cm-1');
    const THz = document.getElementById('THz');
    const fs = document.getElementById('fs');
    const ps = document.getElementById('ps');

    let value = parseFloat(document.getElementById(unit).value);
    if (isNaN(value)) value = 0;

    switch(unit) {
        case 'eV':
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'meV':
            value /= 1000;
            eV.value = value.toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'nm':
            value = 1240 / value;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'um':
            value = 1.24 / value;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'cm-1':
            value /= 8065.6;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'THz':
            value /= 241.8;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'fs':
            value = 4.136 / value;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            ps.value = (0.004 / value).toFixed(3);
            break;
        case 'ps':
            value = 0.004 / value;
            eV.value = value.toFixed(3);
            meV.value = (value * 1000).toFixed(3);
            nm.value = (1240 / value).toFixed(3);
            um.value = (1.24 / value).toFixed(3);
            cm1.value = (value * 8065.6).toFixed(3);
            THz.value = (value * 241.8).toFixed(3);
            fs.value = (4.136 / value).toFixed(3);
            break;
    }
}