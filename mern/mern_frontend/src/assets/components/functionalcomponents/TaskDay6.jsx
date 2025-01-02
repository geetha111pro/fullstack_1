const DatabaseTask = () =>{
    return(
        <section>
            <h1 style={{textAlign:"center"}}>Task</h1>
            <h2 > 1.Update the record with update operation but the record should not be in the original record.</h2>
            <p> db.users.updateOne(
                &#123; firstname: "geetha", package: &#123; $exists: false &#125; &#125;,
                &#123; $set: &#123; package: "12LPA" &#125; &#125;
                );</p> 
            <p> Inserted with Update operation</p>
            <h2>2.if inserted post upsert the object id will continue with other records or with upserted record.</h2>
            <p>The object id continues after post upsert. Only upsert id will be order changed.</p>
            <h2>3. Delete a record one or many using _id </h2>
            <p>db.users.deleteOne( &#123; _id:ObjectId("67769d3cd14b173319843873") &#125; )</p>
            <p>The record is deleted</p>

        </section>
//used codes to display {}
    )
}
export default DatabaseTask;