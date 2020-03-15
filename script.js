var App = new Vue({
    el: '#AppVue',
    data: {
        bin2dec: {
            bin: {
                value: '',
                error: '',
            },
            dec: '',
        },
        dec2bin: {
            dec: {
                value: '',
                error: '',
            },
            bin: '',
        },
    },
    watch: {
        'bin2dec.bin.value': function (a, b) {
            App.checkBinary(a);
        },
        'dec2bin.dec.value': function (a, b) {
            App.checkDecimal(a);
        },
    },
    methods: {
        checkBinary: function () {
            App.bin2dec.bin.value = App.bin2dec.bin.value.trim();
            App.bin2dec.bin.error = '';
            App.bin2dec.dec = '';

            if (App.bin2dec.bin.value) {
                const valid = /^[01]+$/.test(App.bin2dec.bin.value);

                if (!valid) {
                    App.bin2dec.bin.error = 'Binário inválido.';
                } else {
                    App.bin2dec.dec = App.binDec(App.bin2dec.bin.value);
                }
            }
        },

        checkDecimal: function () {
            App.dec2bin.dec.value = App.dec2bin.dec.value.trim();
            App.dec2bin.dec.error = '';
            App.dec2bin.bin = '';

            if (App.dec2bin.dec.value) {
                const valid = /^[0-9]+$/.test(App.dec2bin.dec.value);

                if (!valid) {
                    App.dec2bin.dec.error = 'Decimal inválido.';
                } else {
                    App.dec2bin.bin = App.decBin(App.dec2bin.dec.value);
                }
            }
        },

        binDec: function (bin) {
            return bin.split('').reverse().reduce(function (x, y, i) {
                return (y === '1') ? x + Math.pow(2, i) : x;
            }, 0);
        },

        decBin: function (dec) {
            return (dec >>> 0).toString(2);
        }
    },
});
