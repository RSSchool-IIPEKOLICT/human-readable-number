let text = ''

n0 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
n10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
n1 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

module.exports = function toReadable (number) {
    let array = number.toString().split('').reverse()
    const v = {
        e: parseInt(array[0]),
        d: parseInt(array[1]),
        s: parseInt(array[2]),
        t: parseInt(array[3])
    }

    for (let i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                if (array.length === 1 && v.e === 0) text = 'zero'
                else if (v.d === 1 && (v.s > 0 || v.t > 0)) text = ` ${n10[v.e]}`
                else if (v.d === 1) text = n10[v.e]
                else if (v.e === 0) text = ''
                else if (v.s > 0 || v.t > 0 || v.d > 0) text = ` ${n0[v.e]}`
                else text = n0[v.e]

                array[i] = text
                break
            case 1:
                if (v.d === 0 || v.d === 1) text = ''
                else if (v.s > 0 || v.t > 0) text = ` ${n1[v.d]}`
                else text = n1[v.d]

                array[i] = text
                break
            case 2:
                if (v.s === 0) text = ''
                else if (v.t > 0) text = ` ${n0[v.s]} hundred`
                else text = `${n0[v.s]} hundred`

                array[i] = text
                break
            case 3:
                array[i] = (v.t === 0) ? '' : `${n0[v.t]} thousand`
                break
        }
    }

    return array.reverse().join('')
}

// TODO: MY TEST UTIL
// for (let i = 0; i < 100; i++) {
//     let n = (Math.random() * 9999).toFixed(0)
//     console.log(`#${n}: ${solution(n)}`)
// }
