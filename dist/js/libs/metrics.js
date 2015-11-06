/**
 * Created by Aitem
 */
(function(e) {

    e.fs = function(x, m, c, d){
        return FuzzySet.fs(x, m, c, d);
    };

    e.euclidean = function (x, m) {
        var t = 0;
        for(var i in x){
            t += Math.pow(x[i]-m[i], 2);
        }
        return Math.sqrt(t);
    }

    e.taxicab = function (x, m){
        var t = 0;
        for(var i in x){
           t += Math.abs(x[i] - m[i]);
        }
        return t;
    }

    e.correlation = function(x, m){
        var a = 0, b = 0, c = 0,
            _x = 0, _m =0;
        for(var i in x){
            _x += x[i];
            _m += m[i];
        }
        _x /= x.length; _m /= m.length;
        for(var i in x){
            a += (x[i]-_x)*(m[i]-_m);
            b += Math.pow(x[i] - _x, 2);
            c += Math.pow(m[i] - _m, 2);
        }
        return a/Math.sqrt(b*c);
    }

    e.cosine = function(x, m){
        var  a = 0, b = 0, c = 0;
        for(var i in x){
            a += x[i] * m[i];
            b += Math.pow(x[i], 2);
            c += Math.pow(m[i], 2);
        }
        return a / (Math.sqrt(b) * Math.sqrt(c));
    }

})(typeof exports === 'undefined'? this['Metrics']={}: exports);
