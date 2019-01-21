class Container {
    constructor(html, content, className, parent, id) {
        this.html =  html;
        this.content = content;
        this.className = className;
        this.id = id;
        this.parent = parent;
    }
    
    render() {
        $(parent).append(html).addClass(className);
        
    }
}

class Element extends Container {
    constructor (html, content, className, parent, id) {
        super(html, content, className, parent);
    }
    
    render() {
        $( "<" + this.html + " class='" + this.className + "'>" + this.content + "</" + this.html + ">" ).appendTo(this.parent);
    }
}