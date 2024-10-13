import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/main/not-found/not-found.component';
import { ApiDetailsComponent } from './components/main/api-details/api-details.component';
import { JsonFormatterComponent } from './components/main/json-formatter/json-formatter.component';
import { PasswordGeneratorComponent } from './components/main/password-generator/password-generator.component';
import { RegexTesterComponent } from './components/main/regex-tester/regex-tester.component';
import { UrlShortnerComponent } from './components/main/url-shortner/url-shortner.component';
import { FileConverterComponent } from './components/main/file-converter/file-converter.component';
import { RestApiClientComponent } from './components/main/rest-api-client/rest-api-client.component';
import { StringManipulationToolComponent } from './components/string-manipulation-tool/string-manipulation-tool.component';
import { Base64EncoderDecoderComponent } from './components/base64-encoder-decoder/base64-encoder-decoder.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'appDetails',
    component: ApiDetailsComponent,
    children: [
      {
        path: 'json-formatter',
        component: JsonFormatterComponent
      },
      {
        path: 'password-generator',
        component: PasswordGeneratorComponent
      },
      {
        path: 'regex-tester',
        component: RegexTesterComponent
      },
      {
        path: 'url-shortener',
        component: UrlShortnerComponent
      },
      {
        path: 'file-converter',
        component: FileConverterComponent
      },
      {
        path: 'rest-api-client',
        component: RestApiClientComponent
      },
      {
        path: 'string-manipulation-tools',
        component: StringManipulationToolComponent
      },
      {
        path: 'base64-encoder-decoder',
        component: Base64EncoderDecoderComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
