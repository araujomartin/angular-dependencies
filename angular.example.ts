class LogService {
    sayHi() {
        console.log('I am a log service!');
    }
}

class Component {
    constructor(private _logerService: LogService) {}
    sayHi() {
        this._logerService.sayHi();
    }
}

/*  
    Imagine that LogService need more dependencies and we need to pass them to the constructor of Component
    const myComponent = new Component(new LogService(new AnotherService(), new AnotherService2(), ...));
    Angular does this using a dependency injection container, like this:
*/

class Injector {
    private _container = new Map();

    constructor(private _providers: any[]) {
        this._providers.forEach((provider) => {
            this._container.set(provider, new provider());
        });
    }

    get(service: any) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw new Error(`No provider for service ${service.toString()}`);
        }
        return serviceInstance;
    }
}

const injector = new Injector([LogService]);
const myComponent = new Component(injector.get(LogService));

myComponent.sayHi();

// This is a very simple example of how Angular works under the hood