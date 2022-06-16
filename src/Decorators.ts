export const timer = (target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const originalMethod = propertyDescriptor.value;
        propertyDescriptor.value = function(...args) {
            console.time(`${propertyKey}`);
            originalMethod.apply(this, args);
            console.timeEnd(`${propertyKey}`);
        }
    }