!function(e){e.getVector=function(a,b){var r=[];for(var i in a)r.push(b[i]-a[i]);return r},e.abs=function(a){var r=0;for(var i in a)r+=Math.pow(a[i],2);return Math.sqrt(r)},e.norm=function(a){var r=e.abs(a);for(var i in a)a[i]=a[i]/r;return a},e.cartesian2spherical=function(a){var f=Math.atan(a[2]/a[0]);return f=a[0]<0&&a[2]<0?-Math.PI+f:f,f=a[0]<0&&a[2]>0?Math.PI+f:f,[Math.acos(a[1]/e.abs(a)),f]},e.angles2cos=function(a){for(var i in a)a[i]=Math.cos(a[i]);return a},e.dot=function(a,b){var t=0;for(var i in a)t+=a[i]*b[i];return t},e.getAngle=function(a,b){return Math.acos(e.dot(a,b)/(e.abs(a)*e.abs(b)))}}("undefined"==typeof exports?this.Linear={}:exports);