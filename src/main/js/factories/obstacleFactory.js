import { Car } from '../objects/car.js';
import { Turtle } from '../objects/turtle.js';
import { Log } from '../objects/log.js';

export class ObstacleFactory {
  createObstacles() {
    return [...Car.createCars(), ...Turtle.createTurtles(), ...Log.createLogs()];
  }
}
