import React from 'react';

const NewTasks = ({additionalTask}) => {
    return (
        <div>
            {
                additionalTask?.map((t)=><p key={t.id}>
                    {t.question}
                </p>)
            }
        </div>
    );
};

export default NewTasks;