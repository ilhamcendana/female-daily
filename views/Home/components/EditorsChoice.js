import React from 'react';
import styles from '../style.module.scss';
import { useSelector } from 'react-redux';

//global components
import EditorCard from '../../../components/Card/EditorCard';
import TitleSection from '../../../components/TitleSection';

const EditorChoice = () => {

    const data = useSelector(state => state.reducerHomeContent.homeContent[`editor's choice`]);

    return (
        <div className={styles.editorChoice}>
            <div style={{ minWidth: 1100, display: 'flex', flexDirection: 'column' }}>
                <TitleSection
                    title={`Editor's Choice`}
                    subtitle='Curated with love'
                     />

                <div style={{ width: "100%", marginTop: 70, display: 'flex', justifyContent: 'space-between' }}>
                    {data?.map((item, i) => <EditorCard key={i} data={item} />)}
                </div>
            </div>
        </div>
    );
}

export default EditorChoice;