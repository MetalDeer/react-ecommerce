declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export = classes;
}

declare module '*.module.scss' {
    const classNames: { [className: string]: string };
    export = classNames;
}

// Необходимо экспортировать типы через "=";