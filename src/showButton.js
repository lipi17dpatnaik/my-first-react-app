import { useToggle } from './useToggle';

export function ShowButton() {

    const [isVisible, toggle] = useToggle(true);

    return (
        <div>
            <button onClick={toggle}>
                {isVisible ? 'Show' : 'Hide'}
            </button>
            {isVisible ? 'Some text' : ''}
        </div>

    )

}