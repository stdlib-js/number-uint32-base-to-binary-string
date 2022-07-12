<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a string giving the literal bit representation of an [unsigned 32-bit integer][integer].



<section class="usage">

## Usage

To use in Observable,

```javascript
toBinaryString = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-to-binary-string@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var toBinaryString = require( 'path/to/vendor/umd/number-uint32-base-to-binary-string/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-to-binary-string@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.toBinaryString;
})();
</script>
```

#### toBinaryString( x )

Returns a `string` giving the literal bit representation of an [unsigned 32-bit integer][integer].

```javascript
var Uint32Array = require( '@stdlib/array-uint32' );

var a = new Uint32Array( [ 1, 4, 9 ] );

var str = toBinaryString( a[0] );
// returns '00000000000000000000000000000001'

str = toBinaryString( a[1] );
// returns '00000000000000000000000000000100'

str = toBinaryString( a[2] );
// returns '00000000000000000000000000001001'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Except for [typed arrays][typed-arrays], JavaScript does **not** provide native user support for [unsigned 32-bit integers][integer]. According to the [ECMAScript standard][ecma-262], `number` values correspond to [double-precision floating-point numbers][ieee754]. While this function is intended for [unsigned 32-bit integers][integer], the function will accept [floating-point][ieee754] values and represent the values **as if** they are [unsigned 32-bit integers][integer]. Accordingly, care **should** be taken to ensure that **only** nonnegative integer values less than `4,294,967,296` (`2^32`) are provided.

    ```javascript
    var str = toBinaryString( 1 );
    // returns '00000000000000000000000000000001'

    str = toBinaryString( 4 );
    // returns '00000000000000000000000000000100'

    str = toBinaryString( 9 );
    // returns '00000000000000000000000000001001'

    str = toBinaryString( 4294967295 );
    // returns '11111111111111111111111111111111'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-uint32-base-to-binary-string@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x;
var y;
var b;
var i;

// Generate random unsigned 32-bit integers...
x = new Uint32Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*1.0e5 );
}

// Convert unsigned 32-bit integers to literal bit representations...
for ( i = 0; i < x.length; i++ ) {
    b = toBinaryString( x[i] );
    y = parseInt( b, 2 );
    console.log( 'x: %d, b: %s, y: %d', x[i], b, y );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-uint32-base-to-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-uint32-base-to-binary-string

[test-image]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-uint32-base-to-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-uint32-base-to-binary-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-uint32-base-to-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-uint32-base-to-binary-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/tree/deno
[umd-url]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/tree/umd
[esm-url]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/tree/esm
[branches-url]: https://github.com/stdlib-js/number-uint32-base-to-binary-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-uint32-base-to-binary-string/main/LICENSE

[integer]: https://en.wikipedia.org/wiki/Integer_%28computer_science%29

[typed-arrays]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

[ecma-262]: http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
