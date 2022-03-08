export const loadScript = function (lib, callback) {
    if (lib.isLoaded) {
        if (callback !== undefined) callback();
    } else if (lib.src) {
       if(typeof document !== 'undefined'){
    
      
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = lib.src;
        script.id = lib.id;
        if (lib.attribute) {
            script.setAttribute(lib.attribute, '');
        }
        script.async = true;
        script.onload = () => {
            lib.isLoaded = true;
            if (callback !== undefined) callback();
        };
        head.appendChild(script);
    }
} 
};