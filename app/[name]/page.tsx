export async function gemeraticStaticParams() {
    const names : string[] = ["irfan", "usman", "basit"];
    return names.map((name) => ({
        name: name,
    }));
}

export default function GiveName({params, searchParams} : {
    params: {name: string},
    searchParams: {id: string},
}) {

    return (
        <div>
            My Name is {params.name}.
        </div>
    )
    
}