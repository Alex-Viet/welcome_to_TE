import { Component, PureComponent, memo } from "react";

type IUser = {
  name: string;
  age: number;
}

type IProps = {
  user: IUser;
}

const areUserPropsEqual = (prev: IUser, next: IUser): boolean =>
  prev.name === next.name && prev.age === next.age;

const areNestedUserPropsEqual = (prev: IProps, next: IProps): boolean =>
  areUserPropsEqual(prev.user, next.user);

// functional component
const FirstComponent = memo(
  ({ name, age }: IUser) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  areUserPropsEqual
);

// functional component
// Этот компонент является необязательным для выполнения задания, но продемонстрирует глубину знаний в React.
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  areNestedUserPropsEqual
);

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    )
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps): boolean {
    return !areNestedUserPropsEqual(this.props, nextProps);
  }

  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
