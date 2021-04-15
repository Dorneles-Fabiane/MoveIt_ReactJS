import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileConteiner}>
            <img src="https://avatars.githubusercontent.com/u/64361469?s=460&u=33592ecc6198e978c1134ffb582347924e107438&v=4" alt="foto" />
            <div>
                <strong>Fabiane Dorneles</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level { level }
                    </p>
            </div>
        </div>
    );
}