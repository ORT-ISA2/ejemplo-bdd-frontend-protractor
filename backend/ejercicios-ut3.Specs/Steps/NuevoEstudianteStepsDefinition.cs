using ejercicios_ut3.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using TechTalk.SpecFlow;

namespace ejercicios_ut3.Specs.Steps
{
    [Binding]
    public class NuevoEstudianteStepsDefinition
    {
        private readonly ScenarioContext context;
        private readonly Estudiante _student = new Estudiante();

        public NuevoEstudianteStepsDefinition(ScenarioContext context)
        {
            this.context = context;
        }

        [Given(@"El nombre ""(.*)""")]
        public void GivenTheName(string name)
        {
            _student.Nombre = name;
        }

        [Given(@"El apellido ""(.*)""")]
        public void GivenTheSurname(string surname)
        {
            _student.Apellido = surname;
        }

        [Given(@"El número de estudiante ""(.*)""")]
        public void GivenTheStudentNumber(int studentNumber)
        {
            _student.NroEstudiante = studentNumber;
        }

        [When(@"Creo un ""(.*)"" con esos valores")]
        public async Task WhenIPostThisRequestToTheOperation(string operation)
        {
            string requestBody = JsonConvert.SerializeObject(new { Nombre = _student.Nombre, Apellido = _student.Apellido, NroEstudiante = _student.NroEstudiante });

            // set up Http Request Message
            // ATENCIÓN: Se deberá de modificar el puerto que está en la línea debajo
            var request = new HttpRequestMessage(HttpMethod.Post, $"http://localhost:14462/api/{operation}")
            {
                Content = new StringContent(requestBody)
                {
                    Headers =
                        {
                          ContentType = new MediaTypeHeaderValue("application/json")
                        }
                }
            };
            // create an http client
            var client = new HttpClient();
            // let's post
            var response = await client.SendAsync(request).ConfigureAwait(false);
            try
            {
                context.Set(response.StatusCode, "ResponseStatusCode");
            }
            finally
            {
                // move along, move along
            }
        }

        [Then(@"Veo el mensaje de éxito con el código ""(.*)""")]
        public void ThenISeeTheSuccessMessageWitStatusCode(int statusCode)
        {
            Assert.AreEqual(statusCode, (int)context.Get<HttpStatusCode>("ResponseStatusCode"));
        }
    }
}