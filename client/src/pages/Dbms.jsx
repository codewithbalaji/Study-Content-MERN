import "../css/dbms.css";
import logo from "../assets/images/logo.png";
import { useState } from 'react';
import Chatbot from "../components/Chatbot";


function Dbms() {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    return (


        <>
            <div className="dbms-body">
                <nav className="dbms-nav">
                    <div className="dbms-logo"><img src={logo} alt="Logo" style={{ width: "80px" }} /></div>
                    <div className="dbms-menu-toggle" onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={menuVisible ? 'dbms-links visible' : 'dbms-links'}>
                        <a href="/home">Home</a>
                        <a href="/quizpage">Quiz</a>
                        <a href="/home">Back</a>
                    </div>
                </nav>
                <div className="dbms-heading">
                    <h1>Database Management System</h1>
                    <div className="unit">
                        <a href="#unit1">Unit 1</a>
                        <a href="#">Unit 2</a>
                        <a href="#">Unit 3</a>
                        <a href="#">Unit 4</a>
                        <a href="#">Unit 5</a>
                    </div>
                </div>
                <section id="unit1">
                    <h2><b>UNIT 1</b></h2>
                    <h2><b>RELATIONAL DATABASES</b></h2>
                    <br />
                    <br />
                    <div className="syllabus">
                        <center>
                            <a href="#pds">Purpose of Database System</a> -
                            <a href="#vod">Views of data</a> -
                            <a href="#dm">Data Models</a> -
                            <a href="#dsa">Database System Architecture</a> -
                            <a href="#itrd">Introduction to relational database</a> -
                            <a href="#rm">Relational Model</a> -
                            <a href="#k">Keys</a> -
                            <a href="#ra">Relational Algebra</a> -
                            <a href="#sql">SQL</a> -
                            <a href="#fun">fundamentals</a> -
                            <a href="#asf">Advanced SQL features</a> -
                            <a href="#es">Embedded SQL</a> -
                            <a href="#ds">Dynamic SQL.</a>
                        </center>
                    </div>
                    <br />
                    <br />
                    <div className="rd">
                        <ul>
                            <h3>What is a Relational Database (RDBMS)? </h3>
                        </ul>
                        <ul>
                            <li>A relational database is a type of database that stores and provides access to data points that are related to one another. </li>
                            <li>Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables.</li>
                        </ul>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OqjJjpjDRLc?si=jAF3yarvTWgx0Aeh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <ul>
                                <h3>Start to code your first SQL query! </h3>
                            </ul>
                            <div className="frame">
                                <iframe src="https://onecompiler.com/sqlserver"></iframe>
                            </div>
                        </div>
                    </div>
                    <div id="pds">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Purpose of Database System</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>The purpose of DBMS is to transform the following Data into information.Data into information.</li>
                        </ul>
                        <ol>
                            <li>Data into information.</li>
                            <li>Information into knowledge.</li>
                            <li>Knowledge to the action.</li>
                        </ol>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aa7jsx11Z1Y?si=ODIOLtTjuNWuLFff" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1Y5TZzjD8-1VgfB5AAnrjwEx3MeqEuk2P/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                    <div id="vod">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Views of Database</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>It refers that how database is actually stored in database, what data and structure of data used by database for data. So describe all this database provides user with views and these are</li>
                        </ul>
                        <ol>
                            <li style={{ fontSize: "20px", fontWeight: "bold" }}>Data abstraction.</li>
                            <ul style={{ padding: "7px", marginTop: "9px" }}>
                                <li style={{ fontSize: "20px" }}>DBMS hides some information&lsquos which is not of user interest, a this is called data abstraction</li>
                                <li style={{ fontSize: "20px" }}>So developer hides complexity from user and store abstract view of data.</li>
                                <li style={{ fontSize: "20px" }}><b>Data abstraction has three level of abstractions:</b></li>
                                <ol style={{ marginTop: "5px" }}>
                                    <li style={{ fontSize: "20px" }}>Level / internal level</li>
                                    <li style={{ fontSize: "20px" }}>Logical level / Conceptual level</li>
                                    <li style={{ fontSize: "20px" }}>View level / External level</li>
                                </ol>
                            </ul>
                            <br />
                            <li style={{ fontSize: "20px", fontWeight: "bold" }}>Instances and schemas.</li>
                            <ul style={{ padding: "7px", marginTop: "9px" }}>
                                <li style={{ fontSize: "20px" }}>Design of database is called the Schema.</li>
                                <li style={{ fontSize: "20px" }}>It is basically skeleton structure that represent the logical view of entire database.</li>
                                <li style={{ fontSize: "20px" }}><b>Database system has various schemas.</b></li>
                                <ol style={{ marginTop: "5px" }}>
                                    <li style={{ fontSize: "20px" }}>Physical database schema</li>
                                    <li style={{ fontSize: "20px" }}>Logical database schema</li>
                                    <li style={{ fontSize: "20px" }}>View Schema</li>
                                </ol>
                            </ul>
                        </ol>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/I_PrZ1NHZr8?si=ticgS2h2kQ9-cYBZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1tJSTzdpubQVBHY27ddo9LT9EOvr-CNIQ/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                    <div id="dm">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Data Models</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>The Data Model is a collection of conceptual tools for describing data,
                                data relationship, data semantics, and consistency constraints.</li>
                        </ul>
                        <ol style={{ fontSize: "18px" }}>
                            <li>Hierarchical Model</li>
                            <li>Network Model</li>
                            <li>Entity Relation Model</li>
                            <li>Relational Model</li>
                            <li>Object-Oriented Data Model</li>
                            <li>Object-Relation Model</li>
                            <li>Flat Data Model</li>
                            <li>Semi-Structured Model</li>
                            <li>Associate Data Model</li>
                            <li>Context Data Model</li>
                        </ol>
                        <ol>
                            <h3>
                                <li>Hierarchical Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}> Hierarchical Model was the first DBMS model. This model organizes
                                the data in the hierarchical tree structure. The hierarchy starts from the root which has
                                root data and then it expands in the form of a tree adding child node to the parent node.
                            </p>
                            <h3>
                                <li>Network Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>This model is an extension of the hierarchical model. It was the most
                                popular model before the relational model. This model is the same as the hierarchical model, the
                                only difference is that a record can have more than one parent. It replaces the hierarchical
                                tree
                                with a graph.</p>
                            <h3>
                                <li>Entity Relation Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>Entity-Relationship Model or simply ER Model is a high-level data model diagram. In this model, we represent the real-world problem in the pictorial form to make it easy for the stakeholders to understand. It is also very easy for the developers to understand the system by just looking at the ER diagram. ER diagram has the following three components:</p>
                            <h3>
                                <li>Relational Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>Relational Model is the most widely used model. In this model, the data is maintained in the form of a two-dimensional table. All the information is stored in the form of row and columns. The basic structure of a relational model is tables. So, the tables are also called relations in the relational model.</p>
                            <h3>
                                <li>Object-Oriented Data Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>The real-world problems are more closely represented through the object-oriented data model. In this model, both the data and relationship are present in a single structure known as an object. In this model, two are more objects are connected through links.</p>
                            <h3>
                                <li>Object-Relation Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>It is a combination of both the relational model and the object-oriented model. This model was built to fill the gap between object-oriented model and the relational model. We can have many advanced features like we can make complex data types according to our requirements using the existing data types.</p>
                            <h3>
                                <li>Flat Data Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>It is a simple model in which the database is represented as a table consisting of rows and columns. To access any data, the computer has to read the entire table. This makes the modes slow and inefficient.</p>
                            <h3>
                                <li>Semi-Structured Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>Semi-structured model is an evolved form of the relational model. We cannot differentiate between data and schema in this model.</p>
                            <h3>
                                <li>Associate Data Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>Associative Data Model is a model in which the data is divided into two parts. Everything which has independent existence is called as an entity and the relationship among these entities are called association.</p>
                            <h3>
                                <li>Context Data Model</li>
                            </h3>
                            <p style={{ fontSize: "18px" }}>Context Data Model is a collection of several models. This consists of models like network model, relational models etc. Using this model we can do various types of tasks which are not possible using any model alone.</p>
                        </ol>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OwQoj3GJfNY?si=brVtU4Vd617zBFdO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <ul>
                            <h3>Start to practice your SQL query! </h3>
                        </ul>
                        <div className="frame">
                            <iframe src="https://onecompiler.com/sqlserver"></iframe>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1F7wqVqVZPq6_8Jkyp6tKhZC3sOgE4a6A/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>

                    </div>
                    <div id="dsa">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Database System Architecture</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>A database system is partitioned into modules that deal with each of the responsibilities of the overall system. The functional components of a database system can be broadly divided into the storage manager.</li>
                            <br />
                            <li style={{ fontSize: "20px" }}><b>Components of a database system can be divided into 3 units</b></li>
                        </ul>
                        <ol style={{ fontSize: "18px" }}>
                            <li>Storage Manager</li>
                            <li>Query Processor</li>
                            <li>Database users and administrators</li>
                        </ol>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/8_W5JT7Jz2Y?si=qsQR2bFwOyTEO6Xp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div className="vid1">
                                <h3>Full notes link 👇 </h3>
                                <a href="https://docs.google.com/document/d/1ObebLyPrenJom1zFJYuCYntQzX-lRKoa/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                    <h3 style={{ fontSize: "20px" }}>click here</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="itrd">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Introduction to relational database</h3>
                        <ul>
                            <h3>What is a Relational Database (RDBMS)? </h3>
                        </ul>
                        <ul>
                            <li>A relational database is a type of database that stores and provides access to data points that are related to one another. </li>
                            <li>Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables.</li>
                        </ul>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OqjJjpjDRLc?si=jAF3yarvTWgx0Aeh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <ul>
                                <h3>Start to code your first SQL query! </h3>
                            </ul>
                            <div className="frame">
                                <iframe src="https://onecompiler.com/sqlserver"></iframe>
                            </div>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1eGAK9u0ED919bMsxtpj5q-bvl8-8gJfR/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                    <div id="rm">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Relational Model</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>Relational data model is the primary data model, which is used widely around the world for data storage and processing. This model is simple and it has all the properties and capabilities required to process data with storage efficiency.</li>
                            <br /><br />
                            <li style={{ fontSize: "20px" }}><b>The fundamental operations of relational models are as follows −</b></li>
                        </ul>
                        <ol style={{ fontSize: "18px" }}>
                            <li>Attribute</li>
                            <li>Tables</li>
                            <li>Tuple</li>
                            <li>Relation Schema</li>
                            <li>Degree</li>
                            <li>Cardinality</li>
                            <li>Column</li>
                            <li>Relation instance</li>
                            <li>Attribute domain</li>
                            <li>Null Values</li>
                            <li>Relation instance</li>
                            <li>Relation schema</li>
                            <li>Relation key</li>
                        </ol>
                        <div className="vid1">
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q45sr5p_NmQ?si=FI1uJBJOZfoqDl-n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1v9Dgdz8bdASOdGqSZxD2bv75tybX1sLP/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                    <div id="k">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Keys</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>Keys are one of the basic requirements of a relational database model. It is widely used to identify the tuples(rows) uniquely in the table. We also use keys to set up relations amongst various columns and tables of a relational database.</li>
                            <br /><br />
                            <li style={{ fontSize: "20px" }}><b>Different Types of Database Keys</b></li>
                        </ul>
                        <ol style={{ fontSize: "18px" }}>
                            <li>Candidate Key</li>
                            <li>Primary Key</li>
                            <li>Super</li>
                            <li>Alternate Key</li>
                            <li>Foregin Key</li>
                            <li>Composite Key</li>
                        </ol>
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                        <div className="vid1">

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UZLrD_R0T4?si=Eldf9sPpx-BEndT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <ul>
                                <h3>Start to Practice your own SQL query! </h3>
                            </ul>
                            <div className="frame">
                                <iframe src="https://onecompiler.com/sqlserver"></iframe>
                            </div>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                    <div id="ra">
                        <h3 style={{ color: "white", backgroundColor: "rgb(103, 1, 126)", borderRadius: "10px", padding: "8px", textAlign: "center" }}>Relational Algebra</h3>
                        <ul>
                            <li style={{ fontSize: "20px" }}>Relational algebra is a procedural query language, which takes instances of relations as input and yields instances of relations as output. It uses operators to perform queries. An operator can be either unary or binary. They accept relations as their input and yield relations as their output. Relational algebra is performed recursively on a relation and intermediate results are also considered relations.</li>
                            <br /><br />
                            <li style={{ fontSize: "20px" }}><b>The fundamental operations of relational algebra are as follows −</b></li>
                        </ul>
                        <ol style={{ fontSize: "18px" }}>
                            <li>Select</li>
                            <li>Project</li>
                            <li>Union</li>
                            <li>Set different</li>
                            <li>cartesian product</li>
                            <li>Rename</li>
                        </ol>
                        <div className="vid1">
                        <ul>
                            <h3>Watch the below video to know more! </h3>
                        </ul>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Q45sr5p_NmQ?si=FI1uJBJOZfoqDl-n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            <ul>
                                <h3>Start to code your first SQL query! </h3>
                            </ul>
                            <div className="frame">
                                <iframe src="https://onecompiler.com/sqlserver"></iframe>
                            </div>
                        </div>
                        <div className="vid1">
                            <h3>Full notes link 👇 </h3>
                            <a href="https://docs.google.com/document/d/1v9Dgdz8bdASOdGqSZxD2bv75tybX1sLP/edit?usp=sharing&ouid=109207770834995681106&rtpof=true&sd=true">
                                <h3 style={{ fontSize: "20px" }}>click here</h3>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
            <Chatbot />
        </>


    );
}


export default Dbms;