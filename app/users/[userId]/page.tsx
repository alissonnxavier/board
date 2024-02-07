interface userIdProps {
    params: {
        userId: string;
    }
}

import React from 'react'

const page = ({ params }: userIdProps) => {
    return (
        <div>
            UserId is: {params.userId}
        </div>
    )
}

export default page