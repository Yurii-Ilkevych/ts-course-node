import Person from "./person/Person";

// Додаємо тип Controller для дотримання типів контролерів
type Controller = typeof Person;

const controllers = <Controller[]>[Person];

export { controllers };