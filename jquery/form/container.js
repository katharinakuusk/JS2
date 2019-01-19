class Container {
    constructor(html, content, className, parent, id) {
        this.html =  html;
        this.content = content;
        this.class = className;
        this.id = id;
        this.parent = parent;
    }
    
    render() {
        $(parent).append(html).addClass(className);
        
    }
}

class element extends Container {
    constructor (html, content, className, parent, id) {
        super(html, content, className, parent);
    }
    
    render() {
        $( "<" + this.html + " class='" + this.className + "'>" + this.content + "</" + this.html + ">" ).appendTo(this.parent);
        /*let $node = "<" + this.html + ">" + this.content + "</" + this.html + ">";
        $(this.parent).append($node);*/
        //$node.addClass(".cities__options_option");
    
    }
}